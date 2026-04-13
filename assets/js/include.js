fetch("components/header.html")
.then(respuesta => respuesta.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
});

fetch("components/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});