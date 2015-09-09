/// <reference path='../typings/tsd.d.ts' />
console.log("Hello");
document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");
    var button = document.getElementById("createUserButton");
    button.addEventListener("click", function () {
        console.log("clicked");
        createUser();
    });
});
function createUser() {
    var form = document.getElementById("frm1");
    var elements = form.elements;
    console.log(elements.displayname.value);
    callCreateUserAPI(elements.displayname.value, elements.email.value, function () {
        elements.displayname.value = "";
        elements.email.value = "";
    });
}
function callCreateUserAPI(displayname, email, clearFields) {
    //https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en
    //https://github.com/github/fetch
    //http://davidwalsh.name/fetch
    window.fetch("./api/user/create", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            displayname: displayname,
            email: email
        })
    })
        .then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                response.status);
            return;
        }
        // Examine the text in the response  
        response.json().then(function (data) {
            if (data.created) {
                showResponse("User has been created in DB");
                clearFields();
            }
            else {
                showResponse("Failed to create User in DB");
            }
            console.log(data);
        });
    })
        .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}
function showResponse(message) {
    console.log(message);
    var ele = document.getElementById("responseMessage");
    ele.innerHTML = message;
}
