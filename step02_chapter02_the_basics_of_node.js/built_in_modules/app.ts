
import * as url from "url" 

var parsedURL = url.parse("http://www.example.com/profile?name=barry");
console.log(parsedURL.protocol); // "http:"
console.log(parsedURL.host); // "www.example.com"
console.log(parsedURL.query);// "name=barry"
