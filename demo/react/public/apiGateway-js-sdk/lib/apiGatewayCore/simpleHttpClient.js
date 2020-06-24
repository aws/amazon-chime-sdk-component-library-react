/* eslint-disable */
/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
var apiGateway = apiGateway || {};
apiGateway.core = apiGateway.core || {};

apiGateway.core.simpleHttpClientFactory = {};
apiGateway.core.simpleHttpClientFactory.newClient = function (config) {
    function buildCanonicalQueryString(queryParams) {
        //Build a properly encoded query string from a QueryParam object
        if (Object.keys(queryParams).length < 1) {
            return '';
        }

        var canonicalQueryString = '';
        for (var property in queryParams) {
            if (queryParams.hasOwnProperty(property)) {
                canonicalQueryString += encodeURIComponent(property) + '=' + encodeURIComponent(queryParams[property]) + '&';
            }
        }

        return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
    }

    var simpleHttpClient = { };
    simpleHttpClient.endpoint = apiGateway.core.utils.assertDefined(config.endpoint, 'endpoint');

    simpleHttpClient.makeRequest = function (request) {
        var verb = apiGateway.core.utils.assertDefined(request.verb, 'verb');
        var path = apiGateway.core.utils.assertDefined(request.path, 'path');
        var queryParams = apiGateway.core.utils.copy(request.queryParams);
        if (queryParams === undefined) {
            queryParams = {};
        }
        var headers = apiGateway.core.utils.copy(request.headers);
        if (headers === undefined) {
            headers = {};
        }

        //If the user has not specified an override for Content type the use default
        if(headers['Content-Type'] === undefined) {
            headers['Content-Type'] = config.defaultContentType;
        }

        //If the user has not specified an override for Accept type the use default
        if(headers['Accept'] === undefined) {
            headers['Accept'] = config.defaultAcceptType;
        }

        var body = apiGateway.core.utils.copy(request.body);
        if (body === undefined) {
            body = '';
        }

        var url = config.endpoint + path;
        var queryString = buildCanonicalQueryString(queryParams);
        if (queryString != '') {
            url += '?' + queryString;
        }
        var simpleHttpRequest = {
            method: verb,
            url: url,
            headers: headers,
            data: body
        };
        return axios(simpleHttpRequest);
    };
    return simpleHttpClient;
};