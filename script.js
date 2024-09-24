let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.trim() === "") {
        alert("Parece que você não adicionou nenhum, link, tente novamente!!");
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

    qrImage.style.display = "flex";
    
    imgBox.classList.add("show-img"); 
}
