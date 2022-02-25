
exports.handler = async function(event, context) {
  console.log('ev', event);
  return {
    statusCode: 200,
    body: JSON.stringify({event: event, context: context, env: process.env})
  }
}
