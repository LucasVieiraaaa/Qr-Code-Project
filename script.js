let imgBox = document.getElementById("imgBox");

let qrImage = document.getElementById("qrImage");

let qrText = document.getElementById("qrText");

let insertLink = "Insert link below";

let loading = document.getElementById('loading');

document.getElementById('insertLink').textContent = insertLink;

function generateQR() {
    if (qrText.value.trim() === "") {
        alert("Looks like you did not insert any link, try again...");
        return false;
    }

    loading.style.display = 'block';
    
    qrImage.style.display = 'none';

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

    qrImage.onload = function() {
        loading.style.display = 'none';
        qrImage.style.display = 'block';
        imgBox.classList.add("show-img");
    }
}
