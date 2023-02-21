let links = document.querySelectorAll(".link_division")
links.forEach(element => {
    element.addEventListener("click", function () {
        element.classList.toggle(".activeLink")
    })
});
console.log(links);
console.log(window.location.pathname);
// console.log(window.location.pathname.split("/")[1].split(".")[0]);