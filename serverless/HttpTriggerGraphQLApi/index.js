const { graphql, schema } = require('../graphql');

module.exports = async function (context, req) {

	context.log('JavaScript HTTP trigger function processed a request.');

	const query = req.query.query || (req.body && req.body.query);

	context.log('query: ', query)

	if(!query) {
		context.log('not query')
			context.res = {
					status: 400,
					body: "You must send `query` as a query parameter or in the body"
			};
	} else {
		
	const result = await graphql({
		schema,
		source: query
	})
	context.res = {
			// status: 200, /* Defaults to 200 */
			body: result
	};
	}

};