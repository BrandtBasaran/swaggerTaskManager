const AWS = require("aws-sdk");
const commonFunctions = require('./handler-functions');

const deleteTaskFromDynamo = async taskId => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
  const params = {
    TableName: process.env.DYNAMODB_TASK_TABLE,
    Key: {
      id: taskId,
      sk: `primary`,
    },
  };
  return dynamoDb.delete(params).promise();
}

const handler = async (event) => {
  
  let response = commonFunctions.defaultResponse();

  try {
    const taskId = commonFunctions.getIdParam(event);

    if (taskId) {
      const results = await deleteTaskFromDynamo(taskId);

      if (results) {
        // inspect the result from dynamo, if found, build the response with a 200
        response = {
          statusCode: 200,
          body: JSON.stringify(results),
        };
      } else {
        commonFunctions.handleNotFound(response);
      }
    } else {
      response = commonFunctions.handleNotFound(response);
    }
  } catch (error) {
    commonFunctions.handleError(error, response);
  }
  // return
  return response;
};

module.exports = {
  handler,
};