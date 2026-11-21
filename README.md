# Haura Khadrinur - Professional Digital Curriculum Vitae

Website CV Pribadi (*Personal Curriculum Vitae Website*) formal, elegan, modern, dan profesional untuk **Haura Khadrinur**, lulusan **Teknologi Rekayasa Perangkat Lunak Politeknik Indonusa Surakarta** dengan spesialisasi **Software Development Engineering**.

---

## 🏛️ Konsep Desain & Spesifikasi

- **Format**: *One Page Website* dengan tata letak dua kolom (*two-column executive layout*) di desktop dan satu kolom vertikal di perangkat seluler.
- **Palet Warna Formal**:
  - `Navy Blue (#07354A)`: Warna primer otoritatif, tegas, dan berwibawa.
  - `Putih Kebiruan (#EAF1F4)`: Aksen latar belakang lembut, tag, dan ikon.
  - `Putih (#FFFFFF)`: Latar belakang kartu konten.
  - `Abu-abu (#64748B)`: Teks keterangan, batas halus, dan label sekunder.
- **Tipografi**: Kombinasi **Poppins** (judul/headings yang tegas) dan **Inter** (teks isi/body yang bersih dan mudah dibaca).
- **Teknologi**: Pure **HTML5**, **CSS3**, dan **Vanilla JavaScript** (Tanpa framework Bootstrap/Tailwind/React/Vue).

---

## 📁 Struktur Berkas

```
CV_Haura/
│
├── index.html       # Struktur semantik dua kolom & seluruh konten CV
├── style.css        # Tata letak CSS Grid/Flexbox, palet warna resmi, responsif & print-ready
├── script.js        # Logika Vanilla JS: drawer nav, scrollspy, animasi progress bar & print trigger
└── README.md        # Dokumentasi dan panduan kustomisasi
```

---

## 🗂️ Pembagian Struktur Konten

### Kolom Kiri (Sidebar)
1. **Profile Header**: Foto formal, nama lengkap, spesialisasi keahlian, status ketersediaan, serta tombol **Download CV** & **Contact Me**.
2. **Informasi Kontak**: Email resmi (`khadrinurhaura@gmail.com`), tautan Instagram (`@haurakhad`), dan lokasi.
3. **Riwayat Pendidikan (Timeline Vertikal)**: Politeknik Indonusa Surakarta, Jenjang D4, Program Studi Teknologi Rekayasa Perangkat Lunak.
4. **Kompetensi Utama & Penguasaan Bahasa**: Prinsip rekayasa perangkat lunak dan status kecakapan bahasa.

### Kolom Kanan (Main Content)
1. **About Me**: Pernyataan profil profesional resmi dan 3 pilar prinsip kerja teknis.
2. **Technical Skills (14 Keahlian)**:
   - *HTML, CSS, JavaScript, PHP, Java, Python, MySQL, Database Management, UI/UX Design, Software Development, System Analysis, Git & GitHub, Software Testing, Problem Solving*.
   - Dilengkapi *horizontal progress bar* yang animatif dan persentasenya dapat disesuaikan.
3. **Areas of Expertise (6 Bidang Spesialisasi)**:
   - *Software Development Engineering, Web Development, Database Management, System Analysis and Design, UI/UX Design, Software Testing & Debugging*.
4. **Experience & Projects (Placeholder Terstruktur & Siap Edit)**:
   - *Pengalaman Organisasi*
   - *Pengalaman Kerja / Magang*
   - *Proyek Pengembangan Website*
   - *Proyek Pengembangan Aplikasi*
   - *Sertifikasi & Pelatihan*
5. **Contact**: Tautan langsung ke Email & Instagram, serta formulir pengiriman inquiry profesional.

---

## 🛠️ Cara Menjalankan di Visual Studio Code (Live Server)

1. Buka folder `d:\CV_Haura` di **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** (oleh Ritwick Dey) sudah terpasang.
3. Klik kanan pada berkas `index.html` dan pilih **"Open with Live Server"**.
4. Browser akan otomatis terbuka di `http://127.0.0.1:5500/index.html`.

---

## ✏️ Panduan Kustomisasi Data

### 1. Mengganti Foto Profil Formal
Buka `index.html` dan cari elemen foto:
```html
<img src="https://images.unsplash.com/..." alt="Foto Formal Haura Khadrinur" class="avatar-img" id="profile-img">
```
Ganti atribut `src` dengan berkas foto formal Anda sendiri (contoh: simpan file `foto-formal.jpg` di folder `d:\CV_Haura` dan ubah menjadi `src="foto-formal.jpg"`).

### 2. Menyesuaikan Persentase Technical Skills
Setiap keahlian pada bagian `#skills` memiliki persentase yang mudah diubah:
```html
<span class="skill-percent">90%</span>
...
<div class="progress-bar" data-percent="90%"></div>
```
Cukup ubah angka `90%` sesuai tingkat penguasaan Anda. Nilai progress bar akan otomatis teranimasi saat pengguna menggulir halaman.

### 3. Mengisi Placeholder Pengalaman & Proyek
Setiap kartu pada bagian `#experience` telah diberi label penjelas seperti `[Nama Proyek - Silakan Diisi]`. Cukup ganti teks di dalam tanda kurung siku `[...]` dengan riwayat dan portofolio aktual Anda.

### 4. Cetak / Simpan ke PDF (Download CV)
Klik tombol **"Download CV"** di bagian atas navbar atau kartu profil. Halaman telah dilengkapi stylesheet `@media print` sehingga otomatis diformat menjadi lembar dokumen CV profesional tanpa elemen dekorasi navbar.
