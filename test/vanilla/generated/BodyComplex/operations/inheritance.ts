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
import * as Mappers from "../models/inheritanceMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Inheritance. */
export class Inheritance {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Inheritance.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types that extend others
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getValid(): Promise<Models.InheritanceGetValidResponse>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.InheritanceGetValidResponse>;
  getValid(callback: msRest.ServiceCallback<Models.Siamese>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Siamese>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Siamese>): Promise<Models.InheritanceGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.InheritanceGetValidResponse>;
  }

  /**
   * Put complex types that extend others
   *
   * @param complexBody Please put a siamese with id=2, name="Siameee", color=green, breed=persion,
   * which hates 2 dogs, the 1st one named "Potato" with id=1 and food="tomato", and the 2nd one
   * named "Tomato" with id=-1 and food="french fries".
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putValid(complexBody: Models.Siamese): Promise<msRest.RestResponse>;
  putValid(complexBody: Models.Siamese, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putValid(complexBody: Models.Siamese, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.Siamese, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.Siamese, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/inheritance/valid",
  responses: {
    200: {
      bodyMapper: Mappers.Siamese
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/inheritance/valid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Siamese,
      required: true
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
