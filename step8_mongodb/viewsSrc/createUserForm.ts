interface UserFormElements {
    displayname: HTMLInputElement;
    email: HTMLInputElement;
}

console.log("Hello");

document.addEventListener("DocumentContentLoaded", function(){
    var button = <HTMLButtonElement> document.getElementById("createUserButton");
    button.addEventListener("click", function(){
        createUser();
    })
});


function createUser(){
    var form: HTMLFormElement = <HTMLFormElement> document.getElementById("frm1");
    var elements: UserFormElements = <UserFormElements>(<any> form.elements);
    console.log(elements.displayname);
    
}