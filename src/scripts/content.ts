/* remove overflow:hidden, allowing scrolling again */
var scrollHiddenElems = document.querySelectorAll(".cs-dm-add");
scrollHiddenElems.forEach(function (elem) {
    elem.classList.remove("cs-dm-add");
});

/* remove big device popup */
document.getElementById("cs-dm-add")?.remove();