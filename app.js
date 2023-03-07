// Mengambil Elemen Gambar dan Tombol
var img = document.querySelector('.slideshow');

// Membuat Array dengan Beberapa Sumber Gambar
var imgSources = ['assets/1.png', 'assets/2.jpg', 'assets/3.jpg'];

// Menentukan Indeks Gambar Saat Ini
var currentIndex = 0;

// Fungsi untuk Mengganti Gambar
function changeImage() {
    img.src = imgSources[currentIndex];
}

// Fungsi untuk Menggeser ke Gambar Sebelumnya
function prevImage() {
    currentIndex = (currentIndex - 1 + imgSources.length) % imgSources.length;
    changeImage();
}

// Fungsi untuk Menggeser ke Gambar Berikutnya
function nextImage() {
    currentIndex = (currentIndex + 1) % imgSources.length;
    changeImage();
}

// Menjalankan Fungsi untuk Replace Gambar setiap 3 detik
setInterval(nextImage, 2000);

// Fungsi untuk muncul notifikasi setelah mengisi Form
function validateForm() {
    var name = document.forms['message-form']['full-name'].value;
    var date = document.forms['message-form']['email'].value;
    var messages =document.forms['message-form']['messages'].value;

    document.getElementById('sender-full-name').innerText = name;
    document.getElementById('sender-email').innerText = date;
    document.getElementById('sender-messages').innerText = messages;
    return false;
}
