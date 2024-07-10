
function generateQRCode() {
    // Recupera il link inserito
    const link = document.getElementById('link').value;

    // Pulizia dell'area del QR code
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';

    // Genera il QR code
    new QRCode(qrcodeContainer, link);
}

new QRCode(qrcodeContainer, {
    text: link,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});