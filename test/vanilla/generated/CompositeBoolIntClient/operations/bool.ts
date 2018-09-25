/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/boolMappers";
import { CompositeBoolIntContext } from "../compositeBoolIntContext";

/** Class representing a Bool. */
export class Bool {
  private readonly client: CompositeBoolIntContext;

  /**
   * Create a Bool.
   * @param {CompositeBoolIntContext} client Reference to the service client.
   */
  constructor(client: CompositeBoolIntContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getTrue(): Promise<Models.BoolGetTrueResponse>;
  getTrue(options: msRest.RequestOptionsBase): Promise<Models.BoolGetTrueResponse>;
  getTrue(callback: msRest.ServiceCallback<boolean>): void;
  getTrue(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getTrue(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.BoolGetTrueResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getTrueOperationSpec,
      callback) as Promise<Models.BoolGetTrueResponse>;
  }

  /**
   * Set Boolean value true
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putTrue(): Promise<msRest.RestResponse>;
  putTrue(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putTrue(callback: msRest.ServiceCallback<void>): void;
  putTrue(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putTrue(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putTrueOperationSpec,
      callback);
  }

  /**
   * Get false Boolean value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getFalse(): Promise<Models.BoolGetFalseResponse>;
  getFalse(options: msRest.RequestOptionsBase): Promise<Models.BoolGetFalseResponse>;
  getFalse(callback: msRest.ServiceCallback<boolean>): void;
  getFalse(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getFalse(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.BoolGetFalseResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getFalseOperationSpec,
      callback) as Promise<Models.BoolGetFalseResponse>;
  }

  /**
   * Set Boolean value false
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putFalse(): Promise<msRest.RestResponse>;
  putFalse(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putFalse(callback: msRest.ServiceCallback<void>): void;
  putFalse(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putFalse(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putFalseOperationSpec,
      callback);
  }

  /**
   * Get null Boolean value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getNull(): Promise<Models.BoolGetNullResponse>;
  getNull(options: msRest.RequestOptionsBase): Promise<Models.BoolGetNullResponse>;
  getNull(callback: msRest.ServiceCallback<boolean>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.BoolGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.BoolGetNullResponse>;
  }

  /**
   * Get invalid Boolean value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getInvalid(): Promise<Models.BoolGetInvalidResponse>;
  getInvalid(options: msRest.RequestOptionsBase): Promise<Models.BoolGetInvalidResponse>;
  getInvalid(callback: msRest.ServiceCallback<boolean>): void;
  getInvalid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  getInvalid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): Promise<Models.BoolGetInvalidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidOperationSpec,
      callback) as Promise<Models.BoolGetInvalidResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "bool/true",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "bool/true",
  requestBody: {
    parameterPath: "boolBody",
    mapper: {
      required: true,
      isConstant: true,
      serializedName: "boolBody",
      defaultValue: true,
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getFalseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "bool/false",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putFalseOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "bool/false",
  requestBody: {
    parameterPath: "boolBody",
    mapper: {
      required: true,
      isConstant: true,
      serializedName: "boolBody",
      defaultValue: false,
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "bool/null",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "bool/invalid",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Boolean"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
