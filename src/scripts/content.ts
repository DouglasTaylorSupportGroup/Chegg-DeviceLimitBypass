/* remove overflow:hidden, allowing scrolling again */
var scrollHiddenElems = document.querySelectorAll(".cs-dm-add");
scrollHiddenElems.forEach(function (elem) {
    elem.classList.remove("cs-dm-add");
});

/* remove big device popup - for textbook */
document.getElementById("cs-dm-add")?.remove();

/* remove big device popup - for normal qna */
document.getElementById("device-management-registration-modal-container")?.remove();