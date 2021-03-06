/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestSwaggerBATByteServiceContext } from "./autoRestSwaggerBATByteServiceContext";

class AutoRestSwaggerBATByteService extends AutoRestSwaggerBATByteServiceContext {
  // Operation groups
  byteModel: operations.ByteModel;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATByteService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATByteServiceOptions) {
    super(options);
    this.byteModel = new operations.ByteModel(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATByteService,
  AutoRestSwaggerBATByteServiceContext,
  Models as AutoRestSwaggerBATByteServiceModels,
  Mappers as AutoRestSwaggerBATByteServiceMappers
};
export * from "./operations";
