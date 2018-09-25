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
import * as Mappers from "../models/polymorphicrecursiveMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Polymorphicrecursive. */
export class Polymorphicrecursive {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Polymorphicrecursive.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getValid(): Promise<Models.PolymorphicrecursiveGetValidResponse>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.PolymorphicrecursiveGetValidResponse>;
  getValid(callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FishUnion>): Promise<Models.PolymorphicrecursiveGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.PolymorphicrecursiveGetValidResponse>;
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   *
   * @param complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putValid(complexBody: Models.FishUnion): Promise<msRest.RestResponse>;
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putValid(complexBody: Models.FishUnion, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
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
  path: "complex/polymorphicrecursive/valid",
  responses: {
    200: {
      bodyMapper: Mappers.Fish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphicrecursive/valid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
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