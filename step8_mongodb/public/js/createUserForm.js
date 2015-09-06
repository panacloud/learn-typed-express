console.log("Hello");
document.addEventListener("DocumentContentLoaded", function () {
    var button = document.getElementById("createUserButton");
    button.addEventListener("click", function () {
        createUser();
    });
});
function createUser() {
    var form = document.getElementById("frm1");
    var elements = form.elements;
    console.log(elements.displayname);
}
