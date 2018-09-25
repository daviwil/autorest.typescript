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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/lRORetrysMappers";
import * as Parameters from "../models/parameters";
import { AutoRestLongRunningOperationTestServiceContext } from "../autoRestLongRunningOperationTestServiceContext";

/** Class representing a LRORetrys. */
export class LRORetrys {
  private readonly client: AutoRestLongRunningOperationTestServiceContext;

  /**
   * Create a LRORetrys.
   * @param {AutoRestLongRunningOperationTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestLongRunningOperationTestServiceContext) {
    this.client = client;
  }


  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  put201CreatingSucceeded200(options?: Models.LRORetrysPut201CreatingSucceeded200OptionalParams): Promise<Models.LRORetrysPut201CreatingSucceeded200Response> {
    return this.beginPut201CreatingSucceeded200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPut201CreatingSucceeded200Response>;
  }


  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putAsyncRelativeRetrySucceeded(options?: Models.LRORetrysPutAsyncRelativeRetrySucceededOptionalParams): Promise<Models.LRORetrysPutAsyncRelativeRetrySucceededResponse> {
    return this.beginPutAsyncRelativeRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPutAsyncRelativeRetrySucceededResponse>;
  }


  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  deleteProvisioning202Accepted200Succeeded(options?: msRest.RequestOptionsBase): Promise<Models.LRORetrysDeleteProvisioning202Accepted200SucceededResponse> {
    return this.beginDeleteProvisioning202Accepted200Succeeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysDeleteProvisioning202Accepted200SucceededResponse>;
  }


  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls
   * return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  delete202Retry200(options?: msRest.RequestOptionsBase): Promise<Models.LRORetrysDelete202Retry200Response> {
    return this.beginDelete202Retry200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysDelete202Retry200Response>;
  }


  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  deleteAsyncRelativeRetrySucceeded(options?: msRest.RequestOptionsBase): Promise<Models.LRORetrysDeleteAsyncRelativeRetrySucceededResponse> {
    return this.beginDeleteAsyncRelativeRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysDeleteAsyncRelativeRetrySucceededResponse>;
  }


  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with
   * 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  post202Retry200(options?: Models.LRORetrysPost202Retry200OptionalParams): Promise<Models.LRORetrysPost202Retry200Response> {
    return this.beginPost202Retry200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPost202Retry200Response>;
  }


  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  postAsyncRelativeRetrySucceeded(options?: Models.LRORetrysPostAsyncRelativeRetrySucceededOptionalParams): Promise<Models.LRORetrysPostAsyncRelativeRetrySucceededResponse> {
    return this.beginPostAsyncRelativeRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LRORetrysPostAsyncRelativeRetrySucceededResponse>;
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginPut201CreatingSucceeded200(options?: Models.LRORetrysBeginPut201CreatingSucceeded200OptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPut201CreatingSucceeded200OperationSpec,
      options);
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginPutAsyncRelativeRetrySucceeded(options?: Models.LRORetrysBeginPutAsyncRelativeRetrySucceededOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPutAsyncRelativeRetrySucceededOperationSpec,
      options);
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginDeleteProvisioning202Accepted200Succeeded(options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginDeleteProvisioning202Accepted200SucceededOperationSpec,
      options);
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls
   * return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginDelete202Retry200(options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginDelete202Retry200OperationSpec,
      options);
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginDeleteAsyncRelativeRetrySucceeded(options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginDeleteAsyncRelativeRetrySucceededOperationSpec,
      options);
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with
   * 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginPost202Retry200(options?: Models.LRORetrysBeginPost202Retry200OptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPost202Retry200OperationSpec,
      options);
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  beginPostAsyncRelativeRetrySucceeded(options?: Models.LRORetrysBeginPostAsyncRelativeRetrySucceededOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPostAsyncRelativeRetrySucceededOperationSpec,
      options);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginPut201CreatingSucceeded200OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "lro/retryerror/put/201/creating/succeeded/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPutAsyncRelativeRetrySucceededOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "lro/retryerror/putasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteProvisioning202Accepted200SucceededOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "lro/retryerror/delete/provisioning/202/accepted/200/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysDeleteProvisioning202Accepted200SucceededHeaders
    },
    202: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysDeleteProvisioning202Accepted200SucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDelete202Retry200OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "lro/retryerror/delete/202/retry/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteAsyncRelativeRetrySucceededOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "lro/retryerror/deleteasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPost202Retry200OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "lro/retryerror/post/202/retry/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPostAsyncRelativeRetrySucceededOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "lro/retryerror/postasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    202: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
