# Middlewares:
Express is a routing and middleware web framework with minimal functionality of its own: An Express application is essentially a series of middleware calls.

Middleware is a function with access to the request object (req), the response object (res), and the next middleware in the application’s request-response cycle, commonly denoted by a variable named next.

Middleware can:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

If the current middleware does not end the request-response cycle, it must call next() to pass control to the next middleware, otherwise the request will be left hanging.

# Reference:
http://expressjs.com/guide/using-middleware.html

 