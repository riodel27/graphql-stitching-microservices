const axios = require("axios")

axios({
  url: 'http://localhost:7071/api/HttpTriggerGraphQLApi',
  method: 'post',
  data: {
    query: `
      {
        reviews {
					title
					grade
					comment
            product {
              name
              description
            }
          }
        }
      `
  }
}).then((result) => {
  console.log(JSON.stringify(result.data))
});