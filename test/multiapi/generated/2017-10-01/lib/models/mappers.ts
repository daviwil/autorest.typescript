/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutoRestParameterizedHostTestClientOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutoRestParameterizedHostTestClientOptions",
    modelProperties: {
      host: {
        serializedName: "host",
        defaultValue: 'host',
        type: {
          name: "String"
        }
      }
    }
  }
};