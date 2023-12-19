var waktu = new Date();
var jam = waktu.getHours();
var mnt = waktu.getMinutes();
var dtk = waktu.getSeconds();
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

var bulan = [
"Januari",
"Februari",
"Maret",
"April",
"Mei",
"Juni",
"Juli",
"Agustus",
"September",
"Oktober",
"November",
"Desember",
];
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

document.write(
"" + hari[hr] + ", " + tgl + " " + bulan[bln] + " " + thn + "<br>"
);

if (jam <= 9) {
document.write(
   "Lu gaakan pernah bisa kalo lu gapernah memulai"
);
} else if (jam <= 14) {
document.write(
   "Gaada orang malas yang tiba tiba sukses"
);
} else if (jam <= 17) {
document.write("Jangan lupa ibadah");
} else {
document.write("Good Night");
}