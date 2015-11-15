# express-session 
Simple session middleware for Express

Installation
- npm install express-session --save
- tsd install express-session --save

Example

app.use(session({
  genid: function(req) {
    return genuuid() // use UUIDs for session IDs 
  },
  secret: 'any secret string'
}))

app.get("/", function(req, res){
  res.send(req.session);
})