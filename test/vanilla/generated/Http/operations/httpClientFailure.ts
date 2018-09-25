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
import * as Mappers from "../models/httpClientFailureMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpClientFailure. */
export class HttpClientFailure {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpClientFailure.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 400 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  head400(): Promise<Models.HttpClientFailureHead400Response>;
  head400(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureHead400Response>;
  head400(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head400(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head400(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureHead400Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head400OperationSpec,
      callback) as Promise<Models.HttpClientFailureHead400Response>;
  }

  /**
   * Return 400 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  get400(): Promise<Models.HttpClientFailureGet400Response>;
  get400(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureGet400Response>;
  get400(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get400(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get400(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureGet400Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get400OperationSpec,
      callback) as Promise<Models.HttpClientFailureGet400Response>;
  }

  /**
   * Return 400 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  put400(): Promise<Models.HttpClientFailurePut400Response>;
  put400(options: Models.HttpClientFailurePut400OptionalParams): Promise<Models.HttpClientFailurePut400Response>;
  put400(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put400(options: Models.HttpClientFailurePut400OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put400(options?: Models.HttpClientFailurePut400OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePut400Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put400OperationSpec,
      callback) as Promise<Models.HttpClientFailurePut400Response>;
  }

  /**
   * Return 400 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  patch400(): Promise<Models.HttpClientFailurePatch400Response>;
  patch400(options: Models.HttpClientFailurePatch400OptionalParams): Promise<Models.HttpClientFailurePatch400Response>;
  patch400(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  patch400(options: Models.HttpClientFailurePatch400OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  patch400(options?: Models.HttpClientFailurePatch400OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePatch400Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch400OperationSpec,
      callback) as Promise<Models.HttpClientFailurePatch400Response>;
  }

  /**
   * Return 400 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  post400(): Promise<Models.HttpClientFailurePost400Response>;
  post400(options: Models.HttpClientFailurePost400OptionalParams): Promise<Models.HttpClientFailurePost400Response>;
  post400(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post400(options: Models.HttpClientFailurePost400OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post400(options?: Models.HttpClientFailurePost400OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePost400Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post400OperationSpec,
      callback) as Promise<Models.HttpClientFailurePost400Response>;
  }

  /**
   * Return 400 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  delete400(): Promise<Models.HttpClientFailureDelete400Response>;
  delete400(options: Models.HttpClientFailureDelete400OptionalParams): Promise<Models.HttpClientFailureDelete400Response>;
  delete400(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete400(options: Models.HttpClientFailureDelete400OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete400(options?: Models.HttpClientFailureDelete400OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureDelete400Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete400OperationSpec,
      callback) as Promise<Models.HttpClientFailureDelete400Response>;
  }

  /**
   * Return 401 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  head401(): Promise<Models.HttpClientFailureHead401Response>;
  head401(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureHead401Response>;
  head401(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head401(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head401(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureHead401Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head401OperationSpec,
      callback) as Promise<Models.HttpClientFailureHead401Response>;
  }

  /**
   * Return 402 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  get402(): Promise<Models.HttpClientFailureGet402Response>;
  get402(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureGet402Response>;
  get402(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get402(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get402(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureGet402Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get402OperationSpec,
      callback) as Promise<Models.HttpClientFailureGet402Response>;
  }

  /**
   * Return 403 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  get403(): Promise<Models.HttpClientFailureGet403Response>;
  get403(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureGet403Response>;
  get403(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get403(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get403(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureGet403Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get403OperationSpec,
      callback) as Promise<Models.HttpClientFailureGet403Response>;
  }

  /**
   * Return 404 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  put404(): Promise<Models.HttpClientFailurePut404Response>;
  put404(options: Models.HttpClientFailurePut404OptionalParams): Promise<Models.HttpClientFailurePut404Response>;
  put404(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put404(options: Models.HttpClientFailurePut404OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put404(options?: Models.HttpClientFailurePut404OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePut404Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put404OperationSpec,
      callback) as Promise<Models.HttpClientFailurePut404Response>;
  }

  /**
   * Return 405 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  patch405(): Promise<Models.HttpClientFailurePatch405Response>;
  patch405(options: Models.HttpClientFailurePatch405OptionalParams): Promise<Models.HttpClientFailurePatch405Response>;
  patch405(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  patch405(options: Models.HttpClientFailurePatch405OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  patch405(options?: Models.HttpClientFailurePatch405OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePatch405Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch405OperationSpec,
      callback) as Promise<Models.HttpClientFailurePatch405Response>;
  }

  /**
   * Return 406 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  post406(): Promise<Models.HttpClientFailurePost406Response>;
  post406(options: Models.HttpClientFailurePost406OptionalParams): Promise<Models.HttpClientFailurePost406Response>;
  post406(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post406(options: Models.HttpClientFailurePost406OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post406(options?: Models.HttpClientFailurePost406OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePost406Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post406OperationSpec,
      callback) as Promise<Models.HttpClientFailurePost406Response>;
  }

  /**
   * Return 407 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  delete407(): Promise<Models.HttpClientFailureDelete407Response>;
  delete407(options: Models.HttpClientFailureDelete407OptionalParams): Promise<Models.HttpClientFailureDelete407Response>;
  delete407(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete407(options: Models.HttpClientFailureDelete407OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete407(options?: Models.HttpClientFailureDelete407OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureDelete407Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete407OperationSpec,
      callback) as Promise<Models.HttpClientFailureDelete407Response>;
  }

  /**
   * Return 409 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  put409(): Promise<Models.HttpClientFailurePut409Response>;
  put409(options: Models.HttpClientFailurePut409OptionalParams): Promise<Models.HttpClientFailurePut409Response>;
  put409(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put409(options: Models.HttpClientFailurePut409OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put409(options?: Models.HttpClientFailurePut409OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePut409Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put409OperationSpec,
      callback) as Promise<Models.HttpClientFailurePut409Response>;
  }

  /**
   * Return 410 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  head410(): Promise<Models.HttpClientFailureHead410Response>;
  head410(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureHead410Response>;
  head410(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head410(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head410(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureHead410Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head410OperationSpec,
      callback) as Promise<Models.HttpClientFailureHead410Response>;
  }

  /**
   * Return 411 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  get411(): Promise<Models.HttpClientFailureGet411Response>;
  get411(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureGet411Response>;
  get411(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get411(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get411(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureGet411Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get411OperationSpec,
      callback) as Promise<Models.HttpClientFailureGet411Response>;
  }

  /**
   * Return 412 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  get412(): Promise<Models.HttpClientFailureGet412Response>;
  get412(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureGet412Response>;
  get412(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get412(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get412(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureGet412Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get412OperationSpec,
      callback) as Promise<Models.HttpClientFailureGet412Response>;
  }

  /**
   * Return 413 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  put413(): Promise<Models.HttpClientFailurePut413Response>;
  put413(options: Models.HttpClientFailurePut413OptionalParams): Promise<Models.HttpClientFailurePut413Response>;
  put413(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put413(options: Models.HttpClientFailurePut413OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  put413(options?: Models.HttpClientFailurePut413OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePut413Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put413OperationSpec,
      callback) as Promise<Models.HttpClientFailurePut413Response>;
  }

  /**
   * Return 414 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  patch414(): Promise<Models.HttpClientFailurePatch414Response>;
  patch414(options: Models.HttpClientFailurePatch414OptionalParams): Promise<Models.HttpClientFailurePatch414Response>;
  patch414(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  patch414(options: Models.HttpClientFailurePatch414OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  patch414(options?: Models.HttpClientFailurePatch414OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePatch414Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch414OperationSpec,
      callback) as Promise<Models.HttpClientFailurePatch414Response>;
  }

  /**
   * Return 415 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  post415(): Promise<Models.HttpClientFailurePost415Response>;
  post415(options: Models.HttpClientFailurePost415OptionalParams): Promise<Models.HttpClientFailurePost415Response>;
  post415(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post415(options: Models.HttpClientFailurePost415OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post415(options?: Models.HttpClientFailurePost415OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailurePost415Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post415OperationSpec,
      callback) as Promise<Models.HttpClientFailurePost415Response>;
  }

  /**
   * Return 416 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  get416(): Promise<Models.HttpClientFailureGet416Response>;
  get416(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureGet416Response>;
  get416(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get416(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get416(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureGet416Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get416OperationSpec,
      callback) as Promise<Models.HttpClientFailureGet416Response>;
  }

  /**
   * Return 417 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  delete417(): Promise<Models.HttpClientFailureDelete417Response>;
  delete417(options: Models.HttpClientFailureDelete417OptionalParams): Promise<Models.HttpClientFailureDelete417Response>;
  delete417(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete417(options: Models.HttpClientFailureDelete417OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete417(options?: Models.HttpClientFailureDelete417OptionalParams, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureDelete417Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete417OperationSpec,
      callback) as Promise<Models.HttpClientFailureDelete417Response>;
  }

  /**
   * Return 429 status code - should be represented in the client as an error
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  head429(): Promise<Models.HttpClientFailureHead429Response>;
  head429(options: msRest.RequestOptionsBase): Promise<Models.HttpClientFailureHead429Response>;
  head429(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head429(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head429(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpClientFailureHead429Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head429OperationSpec,
      callback) as Promise<Models.HttpClientFailureHead429Response>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const head400OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/failure/client/400",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get400OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/client/400",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put400OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/failure/client/400",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const patch400OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/failure/client/400",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post400OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/failure/client/400",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const delete400OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/failure/client/400",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const head401OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/failure/client/401",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get402OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/client/402",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get403OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/client/403",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put404OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/failure/client/404",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const patch405OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/failure/client/405",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post406OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/failure/client/406",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const delete407OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/failure/client/407",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put409OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/failure/client/409",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const head410OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/failure/client/410",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get411OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/client/411",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get412OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/client/412",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put413OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/failure/client/413",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const patch414OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/failure/client/414",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post415OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/failure/client/415",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get416OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/client/416",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const delete417OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/failure/client/417",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const head429OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/failure/client/429",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
