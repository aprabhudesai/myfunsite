const wreck          = require('wreck');

export const getHeaderData = () => {

  const options = {
    json: true
  };

  let responseData = {};
  return new Promise((resolve, reject) => {
    wreck.get('http://localhost:9201/api/data?section=header', options, (err, res, payload) => {
      responseData = payload;
      return resolve(responseData);
    });
  });
};
