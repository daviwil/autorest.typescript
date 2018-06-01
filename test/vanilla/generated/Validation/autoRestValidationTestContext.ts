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
import * as Mappers from "./models/mappers";

const packageName = "";
const packageVersion = "";

export class AutoRestValidationTestContext extends msRest.ServiceClient {
  subscriptionId: string;
  apiVersion: string;
  baseUri: string;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestValidationTestContext class.
   * @constructor
   *
   * @param {string} subscriptionId - Subscription ID.
   *
   * @param {string} apiVersion - Required string following pattern \d{2}-\d{2}-\d{4}
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(subscriptionId: string, apiVersion: string, baseUri?: string, options?: msRest.ServiceClientOptions) {
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }
    if (apiVersion === null || apiVersion === undefined) {
      throw new Error('\'apiVersion\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if (!options.serializer) {
      options = {
        ...options,
        serializer: new msRest.Serializer(Mappers, false)
      };
    }

    super(undefined, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = "http://localhost:3000";
    }
    this.subscriptionId = subscriptionId;
    this.apiVersion = apiVersion;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    this.serializer = new msRest.Serializer(Mappers, false);
  }
}
