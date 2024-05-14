let scrollButton = document.querySelector(".scrollBtn");
let scrollableDiv = document.querySelector("#scrollableDiv");

scrollButton.addEventListener("click", function() {
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    scrollButton.style.display = 'none'; // hide button
});

scrollableDiv.addEventListener('scroll', function() {
    if (scrollableDiv.scrollTop === 0) { // scroll position -> top
        scrollButton.style.display = 'block'; // show button
    } else {
        scrollButton.style.display = 'none'; // hide button
    }
});
