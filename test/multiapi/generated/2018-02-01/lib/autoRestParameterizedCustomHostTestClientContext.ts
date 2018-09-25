/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";

const packageName = "@azure/multiapi-test";
const packageVersion = "1.0.0";

export class AutoRestParameterizedCustomHostTestClientContext extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  subscriptionId: string;

  dnsSuffix: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  /**
   * Initializes a new instance of the AutoRestParameterizedCustomHostTestClient class.
   *
   * @param credentials Credentials needed for the client to connect to Azure.
   *
   * @param subscriptionId The subscription id with value 'test12'.
   *
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AutoRestParameterizedCustomHostTestClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId == undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    super(credentials, options);

    this.dnsSuffix = 'host';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = '{vault}{secret}{dnsSuffix}';
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.dnsSuffix !== null && options.dnsSuffix !== undefined) {
      this.dnsSuffix = options.dnsSuffix;
    }
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}