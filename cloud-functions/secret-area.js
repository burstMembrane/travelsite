exports.handler = (event, context, callback) => {
  callback(null, {
    statusCpde: 200,
    body: 'Welcome to the super secret area',
  });
};
