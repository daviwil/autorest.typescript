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
import * as Mappers from "../models/numberMappers";
import { AutoRestNumberTestServiceContext } from "../autoRestNumberTestServiceContext";

/** Class representing a Number. */
export class Number {
  private readonly client: AutoRestNumberTestServiceContext;

  /**
   * Create a Number.
   * @param {AutoRestNumberTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestNumberTestServiceContext) {
    this.client = client;
  }

  /**
   * Get null Number value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getNull(): Promise<Models.NumberGetNullResponse>;
  getNull(options: msRest.RequestOptionsBase): Promise<Models.NumberGetNullResponse>;
  getNull(callback: msRest.ServiceCallback<number>): void;
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.NumberGetNullResponse>;
  }

  /**
   * Get invalid float Number value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getInvalidFloat(): Promise<Models.NumberGetInvalidFloatResponse>;
  getInvalidFloat(options: msRest.RequestOptionsBase): Promise<Models.NumberGetInvalidFloatResponse>;
  getInvalidFloat(callback: msRest.ServiceCallback<number>): void;
  getInvalidFloat(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getInvalidFloat(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetInvalidFloatResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidFloatOperationSpec,
      callback) as Promise<Models.NumberGetInvalidFloatResponse>;
  }

  /**
   * Get invalid double Number value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getInvalidDouble(): Promise<Models.NumberGetInvalidDoubleResponse>;
  getInvalidDouble(options: msRest.RequestOptionsBase): Promise<Models.NumberGetInvalidDoubleResponse>;
  getInvalidDouble(callback: msRest.ServiceCallback<number>): void;
  getInvalidDouble(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getInvalidDouble(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetInvalidDoubleResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidDoubleOperationSpec,
      callback) as Promise<Models.NumberGetInvalidDoubleResponse>;
  }

  /**
   * Get invalid decimal Number value
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getInvalidDecimal(): Promise<Models.NumberGetInvalidDecimalResponse>;
  getInvalidDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetInvalidDecimalResponse>;
  getInvalidDecimal(callback: msRest.ServiceCallback<number>): void;
  getInvalidDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getInvalidDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetInvalidDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidDecimalOperationSpec,
      callback) as Promise<Models.NumberGetInvalidDecimalResponse>;
  }

  /**
   * Put big float value 3.402823e+20
   *
   * @param numberBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigFloat(numberBody: number): Promise<msRest.RestResponse>;
  putBigFloat(numberBody: number, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigFloat(numberBody: number, callback: msRest.ServiceCallback<void>): void;
  putBigFloat(numberBody: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigFloat(numberBody: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        numberBody,
        options
      },
      putBigFloatOperationSpec,
      callback);
  }

  /**
   * Get big float value 3.402823e+20
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigFloat(): Promise<Models.NumberGetBigFloatResponse>;
  getBigFloat(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigFloatResponse>;
  getBigFloat(callback: msRest.ServiceCallback<number>): void;
  getBigFloat(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigFloat(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigFloatResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigFloatOperationSpec,
      callback) as Promise<Models.NumberGetBigFloatResponse>;
  }

  /**
   * Put big double value 2.5976931e+101
   *
   * @param numberBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigDouble(numberBody: number): Promise<msRest.RestResponse>;
  putBigDouble(numberBody: number, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigDouble(numberBody: number, callback: msRest.ServiceCallback<void>): void;
  putBigDouble(numberBody: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigDouble(numberBody: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        numberBody,
        options
      },
      putBigDoubleOperationSpec,
      callback);
  }

  /**
   * Get big double value 2.5976931e+101
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigDouble(): Promise<Models.NumberGetBigDoubleResponse>;
  getBigDouble(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigDoubleResponse>;
  getBigDouble(callback: msRest.ServiceCallback<number>): void;
  getBigDouble(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigDouble(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigDoubleResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigDoubleOperationSpec,
      callback) as Promise<Models.NumberGetBigDoubleResponse>;
  }

  /**
   * Put big double value 99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigDoublePositiveDecimal(): Promise<msRest.RestResponse>;
  putBigDoublePositiveDecimal(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigDoublePositiveDecimal(callback: msRest.ServiceCallback<void>): void;
  putBigDoublePositiveDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigDoublePositiveDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putBigDoublePositiveDecimalOperationSpec,
      callback);
  }

  /**
   * Get big double value 99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigDoublePositiveDecimal(): Promise<Models.NumberGetBigDoublePositiveDecimalResponse>;
  getBigDoublePositiveDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigDoublePositiveDecimalResponse>;
  getBigDoublePositiveDecimal(callback: msRest.ServiceCallback<number>): void;
  getBigDoublePositiveDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigDoublePositiveDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigDoublePositiveDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigDoublePositiveDecimalOperationSpec,
      callback) as Promise<Models.NumberGetBigDoublePositiveDecimalResponse>;
  }

  /**
   * Put big double value -99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigDoubleNegativeDecimal(): Promise<msRest.RestResponse>;
  putBigDoubleNegativeDecimal(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigDoubleNegativeDecimal(callback: msRest.ServiceCallback<void>): void;
  putBigDoubleNegativeDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigDoubleNegativeDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putBigDoubleNegativeDecimalOperationSpec,
      callback);
  }

  /**
   * Get big double value -99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigDoubleNegativeDecimal(): Promise<Models.NumberGetBigDoubleNegativeDecimalResponse>;
  getBigDoubleNegativeDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigDoubleNegativeDecimalResponse>;
  getBigDoubleNegativeDecimal(callback: msRest.ServiceCallback<number>): void;
  getBigDoubleNegativeDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigDoubleNegativeDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigDoubleNegativeDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigDoubleNegativeDecimalOperationSpec,
      callback) as Promise<Models.NumberGetBigDoubleNegativeDecimalResponse>;
  }

  /**
   * Put big decimal value 2.5976931e+101
   *
   * @param numberBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigDecimal(numberBody: number): Promise<msRest.RestResponse>;
  putBigDecimal(numberBody: number, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigDecimal(numberBody: number, callback: msRest.ServiceCallback<void>): void;
  putBigDecimal(numberBody: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigDecimal(numberBody: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        numberBody,
        options
      },
      putBigDecimalOperationSpec,
      callback);
  }

  /**
   * Get big decimal value 2.5976931e+101
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigDecimal(): Promise<Models.NumberGetBigDecimalResponse>;
  getBigDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigDecimalResponse>;
  getBigDecimal(callback: msRest.ServiceCallback<number>): void;
  getBigDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigDecimalOperationSpec,
      callback) as Promise<Models.NumberGetBigDecimalResponse>;
  }

  /**
   * Put big decimal value 99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigDecimalPositiveDecimal(): Promise<msRest.RestResponse>;
  putBigDecimalPositiveDecimal(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigDecimalPositiveDecimal(callback: msRest.ServiceCallback<void>): void;
  putBigDecimalPositiveDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigDecimalPositiveDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putBigDecimalPositiveDecimalOperationSpec,
      callback);
  }

  /**
   * Get big decimal value 99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigDecimalPositiveDecimal(): Promise<Models.NumberGetBigDecimalPositiveDecimalResponse>;
  getBigDecimalPositiveDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigDecimalPositiveDecimalResponse>;
  getBigDecimalPositiveDecimal(callback: msRest.ServiceCallback<number>): void;
  getBigDecimalPositiveDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigDecimalPositiveDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigDecimalPositiveDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigDecimalPositiveDecimalOperationSpec,
      callback) as Promise<Models.NumberGetBigDecimalPositiveDecimalResponse>;
  }

  /**
   * Put big decimal value -99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putBigDecimalNegativeDecimal(): Promise<msRest.RestResponse>;
  putBigDecimalNegativeDecimal(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putBigDecimalNegativeDecimal(callback: msRest.ServiceCallback<void>): void;
  putBigDecimalNegativeDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putBigDecimalNegativeDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putBigDecimalNegativeDecimalOperationSpec,
      callback);
  }

  /**
   * Get big decimal value -99999999.99
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getBigDecimalNegativeDecimal(): Promise<Models.NumberGetBigDecimalNegativeDecimalResponse>;
  getBigDecimalNegativeDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetBigDecimalNegativeDecimalResponse>;
  getBigDecimalNegativeDecimal(callback: msRest.ServiceCallback<number>): void;
  getBigDecimalNegativeDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getBigDecimalNegativeDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetBigDecimalNegativeDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBigDecimalNegativeDecimalOperationSpec,
      callback) as Promise<Models.NumberGetBigDecimalNegativeDecimalResponse>;
  }

  /**
   * Put small float value 3.402823e-20
   *
   * @param numberBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putSmallFloat(numberBody: number): Promise<msRest.RestResponse>;
  putSmallFloat(numberBody: number, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putSmallFloat(numberBody: number, callback: msRest.ServiceCallback<void>): void;
  putSmallFloat(numberBody: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putSmallFloat(numberBody: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        numberBody,
        options
      },
      putSmallFloatOperationSpec,
      callback);
  }

  /**
   * Get big double value 3.402823e-20
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getSmallFloat(): Promise<Models.NumberGetSmallFloatResponse>;
  getSmallFloat(options: msRest.RequestOptionsBase): Promise<Models.NumberGetSmallFloatResponse>;
  getSmallFloat(callback: msRest.ServiceCallback<number>): void;
  getSmallFloat(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getSmallFloat(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetSmallFloatResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSmallFloatOperationSpec,
      callback) as Promise<Models.NumberGetSmallFloatResponse>;
  }

  /**
   * Put small double value 2.5976931e-101
   *
   * @param numberBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putSmallDouble(numberBody: number): Promise<msRest.RestResponse>;
  putSmallDouble(numberBody: number, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putSmallDouble(numberBody: number, callback: msRest.ServiceCallback<void>): void;
  putSmallDouble(numberBody: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putSmallDouble(numberBody: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        numberBody,
        options
      },
      putSmallDoubleOperationSpec,
      callback);
  }

  /**
   * Get big double value 2.5976931e-101
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getSmallDouble(): Promise<Models.NumberGetSmallDoubleResponse>;
  getSmallDouble(options: msRest.RequestOptionsBase): Promise<Models.NumberGetSmallDoubleResponse>;
  getSmallDouble(callback: msRest.ServiceCallback<number>): void;
  getSmallDouble(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getSmallDouble(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetSmallDoubleResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSmallDoubleOperationSpec,
      callback) as Promise<Models.NumberGetSmallDoubleResponse>;
  }

  /**
   * Put small decimal value 2.5976931e-101
   *
   * @param numberBody
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  putSmallDecimal(numberBody: number): Promise<msRest.RestResponse>;
  putSmallDecimal(numberBody: number, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  putSmallDecimal(numberBody: number, callback: msRest.ServiceCallback<void>): void;
  putSmallDecimal(numberBody: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putSmallDecimal(numberBody: number, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        numberBody,
        options
      },
      putSmallDecimalOperationSpec,
      callback);
  }

  /**
   * Get small decimal value 2.5976931e-101
   *
   * @param [options] Optional Parameters.
   *
   * @returns A promise is returned
   */
  getSmallDecimal(): Promise<Models.NumberGetSmallDecimalResponse>;
  getSmallDecimal(options: msRest.RequestOptionsBase): Promise<Models.NumberGetSmallDecimalResponse>;
  getSmallDecimal(callback: msRest.ServiceCallback<number>): void;
  getSmallDecimal(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
  getSmallDecimal(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<number>): Promise<Models.NumberGetSmallDecimalResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSmallDecimalOperationSpec,
      callback) as Promise<Models.NumberGetSmallDecimalResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/null",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/invalidfloat",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/invaliddouble",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/invaliddecimal",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/float/3.402823e+20",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      serializedName: "numberBody",
      type: {
        name: "Number"
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

const getBigFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/float/3.402823e+20",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/double/2.5976931e+101",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      serializedName: "numberBody",
      type: {
        name: "Number"
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

const getBigDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/double/2.5976931e+101",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigDoublePositiveDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/double/99999999.99",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      isConstant: true,
      serializedName: "numberBody",
      defaultValue: 99999999.99,
      type: {
        name: "Number"
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

const getBigDoublePositiveDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/double/99999999.99",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigDoubleNegativeDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/double/-99999999.99",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      isConstant: true,
      serializedName: "numberBody",
      defaultValue: -99999999.99,
      type: {
        name: "Number"
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

const getBigDoubleNegativeDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/double/-99999999.99",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/decimal/2.5976931e+101",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      serializedName: "numberBody",
      type: {
        name: "Number"
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

const getBigDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/decimal/2.5976931e+101",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigDecimalPositiveDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/decimal/99999999.99",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      isConstant: true,
      serializedName: "numberBody",
      defaultValue: 99999999.99,
      type: {
        name: "Number"
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

const getBigDecimalPositiveDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/decimal/99999999.99",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBigDecimalNegativeDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/big/decimal/-99999999.99",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      isConstant: true,
      serializedName: "numberBody",
      defaultValue: -99999999.99,
      type: {
        name: "Number"
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

const getBigDecimalNegativeDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/big/decimal/-99999999.99",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putSmallFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/small/float/3.402823e-20",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      serializedName: "numberBody",
      type: {
        name: "Number"
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

const getSmallFloatOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/small/float/3.402823e-20",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putSmallDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/small/double/2.5976931e-101",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      serializedName: "numberBody",
      type: {
        name: "Number"
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

const getSmallDoubleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/small/double/2.5976931e-101",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putSmallDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "number/small/decimal/2.5976931e-101",
  requestBody: {
    parameterPath: "numberBody",
    mapper: {
      required: true,
      serializedName: "numberBody",
      type: {
        name: "Number"
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

const getSmallDecimalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "number/small/decimal/2.5976931e-101",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
