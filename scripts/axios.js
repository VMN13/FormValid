const axios = require('axios').default;

axios
  .get('http://localhost:9090/api/registration')
  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.error(error);
  });
