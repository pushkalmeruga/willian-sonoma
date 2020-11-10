module.exports = (error, req, res, next) => { 
    console.error(`${new Date()}:${req.baseUrl}:${error.message}`);
    return req.xhr
      ? res.json({
        status: 500,
        error: 'Server Side Error',
        code: 500,
        message: 'Server Side Error'
      })
      : res.sendStatus(500);
  };
  