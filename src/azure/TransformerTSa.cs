using System;
using System.Linq;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.Extensions.Azure;
using AutoRest.TypeScript.Azure.Model;
using AutoRest.TypeScript.Model;
using static AutoRest.Core.Utilities.DependencyInjection;
using System.Collections.Generic;

namespace AutoRest.TypeScript.Azure
{
    public class TransformerTSa : TransformerTS, ITransformer<CodeModelTSa>
    {

        public override CodeModelTS TransformCodeModel(CodeModel codeModel)
        {
            return ((ITransformer<CodeModelTSa>)this).TransformCodeModel(codeModel);
        }

        CodeModelTSa ITransformer<CodeModelTSa>.TransformCodeModel(CodeModel cm)
        {
            var codeModel = cm as CodeModelTSa;
            if (codeModel == null)
            {
                throw new InvalidCastException("Code Model is not a TypeScript Azure code model.");
            }

            // MethodNames are normalized explicitly to provide a consitent method name while
            // generating cloned methods for long running operations with reserved words. For
            // example - beginDeleteMethod() insteadof beginDelete() as delete is a reserved word.
            // Namer.NormalizeMethodNames(serviceClient);

            AzureExtensions.NormalizeAzureClientModel(codeModel);
            base.TransformCodeModel(codeModel);
            ExtendAllResourcesToBaseResource(codeModel);
            CreateModelTypeForOptionalClientProperties(codeModel);
            return codeModel;
        }

        private static void ExtendAllResourcesToBaseResource(CodeModelTSa codeModel)
        {
            if (codeModel != null)
            {
                foreach (var model in codeModel.ModelTypes)
                {
                    if (model.Extensions.ContainsKey(AzureExtensions.AzureResourceExtension) &&
                        (bool)model.Extensions[AzureExtensions.AzureResourceExtension])
                    {
                        model.BaseModelType = New<CompositeType>( new { Name = "BaseResource", SerializedName = "BaseResource" });
                    }
                }
            }
        }

        public override void CreateModelTypeForOptionalClientProperties(CodeModelTS cm)
        {
            List<string> predefinedOptionalProperties = new List<string>() {
                "requestOptions", "filters", "noRetryPolicy", "apiVersion",
                "acceptLanguage", "longRunningOperationRetryTimeout",
                "generateClientRequestId", "rpRegistrationRetryTimeout" };
            var optionalProperitesOnClient = cm.Properties.Where(
                p => (!p.IsRequired || p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue))
                && !p.IsConstant && !predefinedOptionalProperties.Contains(p.Name));
            if (optionalProperitesOnClient.Count() > 0 || !cm.IsCustomBaseUri)
            {
                string modelTypeName = cm.Name + "Options";
                var modelType = new CompositeTypeTS(modelTypeName);
                modelType.BaseModelType = New<CompositeType>(new { Name = "AzureServiceClientOptions", SerializedName = "AzureServiceClientOptions" });
                // We could end up having a property that is required but has a default value based on the above condition. If so then make it optional.
                optionalProperitesOnClient.Where(p => p.IsRequired && !string.IsNullOrEmpty(p.DefaultValue)).ForEach(prop => prop.IsRequired = false);
                modelType.AddRange(optionalProperitesOnClient);
                if (!cm.IsCustomBaseUri)
                {
                    var prop = New<PropertyTS>();
                    prop.Name = "baseUri";
                    prop.ModelType = new PrimaryTypeTS(KnownPrimaryType.String);
                    modelType.Add(prop);
                }

                var modelTypeFound = cm.ModelTypes.FirstOrDefault(m => m.Name.EqualsIgnoreCase(modelTypeName));
                if (modelTypeFound != null)
                {
                    cm.Remove(modelTypeFound);
                }
                cm.Add(modelType);
                cm.OptionalParameterTypeForClientConstructor = "Models." + modelTypeName;
            }
        }
    }
}