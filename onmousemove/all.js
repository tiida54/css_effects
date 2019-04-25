console.log("all.js");
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})