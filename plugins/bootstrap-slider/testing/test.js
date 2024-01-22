// script.js
function validateForm() {
  // Ambil nilai dari input username dan password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Contoh validasi sederhana (gantilah dengan validasi sesuai kebutuhan)
  if (username === "admin" && password === "123") {
    // Jika login berhasil, arahkan ke halaman kedua
    window.location.href = "datapegawai.html";
  } else {
    // Jika login gagal, berikan pesan kesalahan (opsional)
    alert("Login gagal. Periksa kembali username dan password.");
  }
}
