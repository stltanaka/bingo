// Example: AWS Lambda function
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        const { text } = body;

        // Save the text to DynamoDB
        const params = {
            TableName: 'TextStorage', // Make sure this table exists
            Item: {
                id: 'unique-text-id', // Use a unique identifier
                text: text,
            },
        };

        await dynamoDB.put(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Text saved successfully!' }),
        };
    } else if (event.httpMethod === 'GET') {
        // Retrieve the text
        const params = {
            TableName: 'TextStorage',
            Key: {
                id: 'unique-text-id',
            },
        };

        const result = await dynamoDB.get(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request' }),
    };
};
