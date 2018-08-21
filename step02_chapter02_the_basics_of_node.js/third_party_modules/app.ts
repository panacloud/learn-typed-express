
import { render } from "mustache";

let result = render("Hi, {{first}} {{last}}!", {
    first: "Nicolas",
    last: "Cage"
});

console.log(result);