let imgBox = document.getElementById("imgBox");

let qrImage = document.getElementById("qrImage");

let qrText = document.getElementById("qrText");

let insertLink = "Insert Link below";

document.getElementById('insertLink').textContent = insertLink;

function generateQR() {
    if (qrText.value.trim() === "") {
        alert("Looks like you did not inserted any link, try again...");
        return false;
    }

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

    qrImage.style.display = "flex";

    imgBox.classList.add("show-img");
}