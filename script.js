function kirimWhatsApp(event) {
  // Mencegah form reload
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let jenis = document.getElementById("jenis_periksa").value;
  let keluhan = document.getElementById("keluhan").value;

  // Nomor tujuan WA
  let nomor = "6282142169606";

  // Format pesan
  let pesan =
    "*Pendaftaran Pasien Online*\n\n" +
    "*Nama:* " +
    nama +
    "\n" +
    "*Umur:* " +
    umur +
    "\n" +
    "*Pemeriksaan:* " +
    jenis +
    "\n" +
    "*Keluhan:* " +
    keluhan;

  // Kirim WA
  window.location.href =
    "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
}
