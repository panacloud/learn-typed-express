# ejs:
Embedded JavaScript templates

- Control flow with <% %>
- Escaped output with <%= %>
- Unescaped raw output with <%- %>
- Includes

Usage: 

- <% 'Scriptlet' tag, for control-flow, no output
- <%= Outputs the value into the template (HTML escaped)
- <%- Outputs the unescaped value into the template
- <%# Comment tag, no execution, no output
- %> Plain ending tag