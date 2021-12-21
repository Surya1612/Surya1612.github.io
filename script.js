var load = document.getElementById('loader');

window.addEventListener("load", function() {
    load.style.display = "none";
})

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}