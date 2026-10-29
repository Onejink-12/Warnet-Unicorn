document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const jenis = document.getElementById("jenis").value;
    const jumlah = document.getElementById("jumlah").value;
    const catatan = document.getElementById("alamat").value.trim();

    // Ganti nomor ini jika nomor WhatsApp pemesanan Unicorn berubah.
    const nomor = "62881026042999";

    const pesan = `Halo Unicorn Internet Cafe!

Saya ingin melakukan pemesanan.

Nama/Member: ${nama}
Jenis Pesanan: ${jenis}
Jumlah Pesanan: ${jumlah}
Catatan: ${catatan || "-"}

Mohon konfirmasi pesanan dan total harganya.
Terima kasih.`;

    const whatsapp = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
    window.open(whatsapp, "_blank", "noopener,noreferrer");
});
