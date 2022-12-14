/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import { Client } from '@elastic/elasticsearch';
// @ts-ignore
import { AmazonConnection, AmazonTransport } from 'aws-elasticsearch-connector';

const esDomainEndpoint = process.env.ELASTICSEARCH_DOMAIN_ENDPOINT || 'https://fake-es-endpoint.com';
const auth = {
    username: process.env.ELASTICSEARCH_DOMAIN_USER || '',
    password: process.env.ELASTICSEARCH_DOMAIN_PASSSWORD || '',
};

// eslint-disable-next-line import/prefer-default-export
export const ElasticSearchCustomClient = new Client({
    node: esDomainEndpoint,
    Connection: AmazonConnection,
    Transport: AmazonTransport,
    auth,
});
