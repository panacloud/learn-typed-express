# req.params:
An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.

// GET /user/tj
req.params.name
// => "tj"