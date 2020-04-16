const apigClientFactory = require('aws-api-gateway-client').default;

const CONFIG = {
  invokeUrl: 'https://wfvlfxn79j.execute-api.us-east-1.amazonaws.com/dev',
  accessKey: 'AKIAVIKNMIPQB2TPI7PI',
  secretKey: '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',
  region: 'us-east-1',
};

class ApiGatewayClient {
  private apiGatewayClient: any;

  constructor() {
    this.apiGatewayClient = apigClientFactory.newClient(CONFIG);
  }
  
  async createCustomer(customerName: string): Promise<any> {
    const pathParams = { customerName: customerName };
    const pathTemplate = '/customer';
    const method = 'POST';
    const additionalParams = {
      queryParams: {
        customerName: customerName
      }
    };
    const body = {};
    let response: any;
    this.apiGatewayClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body)
      .then((result: any) => {
        console.log("Create customer success", result);
        response = result;
      }).catch((result: Error) => {
        console.log("Create customer error", result);
        response = result;
      });
    return response;
  }

  async retriveCustomers(): Promise<any> {
    const pathTemplate = '/agent/customers';
    const method = 'GET';
    
    const response = await this.apiGatewayClient.invokeApi({}, pathTemplate, method, {}, {});
    try {
      const customer = await response.data.data;
      return customer;
    } catch (error) {
      return response;
    }
  }

  async getFirstCustomer(): Promise<any> {
    const pathTemplate = '/agent/customers/oldest';
    const method = 'GET';

    const response = await this.apiGatewayClient.invokeApi({}, pathTemplate, method, {}, {});
    try {
      const customer = await response.data.data;
      return customer;
    } catch (error) {
      return response;
    }
  }

  async createMeeting(customerId: string): Promise<any> {
    const pathParams = { customerId: customerId };
    const pathTemplate = '/meeting';
    const method = 'POST';
    const additionalParams = {
      queryParams: {
        customerId: customerId
      }
    };

    const response = await this.apiGatewayClient.invokeApi(pathParams, pathTemplate, method, additionalParams, {});
    try {
      const meeting = await response.data;
      return meeting;
    } catch (error) {
      return response;
    }
  }
}

export default new ApiGatewayClient();
