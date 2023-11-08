## Deskripsi Program:
Program ini mengizinkan Anda mengontrol akses ke formulir berdasarkan lokasi geografis dan waktu. Dengan kata lain, formulir hanya dapat diisi jika pengguna berada dalam jarak tertentu dari koordinat yang diizinkan dan jika waktu saat ini berada dalam rentang waktu yang ditentukan.

## Tujuan
Program ini diciptakan untuk memberikan kendali otomatis terhadap pengisian formulir berdasarkan dua parameter utama, yaitu lokasi dan waktu. Tujuannya dapat mencakup pengaturan akses formulir survei hanya ketika pengguna berada di lokasi yang ditentukan dan hanya selama jendela waktu tertentu.

## Cara Penggunaan:

1. Import Kode: Pastikan Anda memiliki lingkungan pengembangan yang mendukung Google Apps Script, seperti Google Workspace (G Suite). Salin kode di atas ke editor skrip Google Workspace atau Google Apps Script.

2. Atur Formulir: Gantilah formId dengan ID formulir yang ingin Anda kendalikan akses dan batas waktu pengisiannya.
Sesuaikan allowedLatitude dan allowedLongitude dengan koordinat geografis yang diizinkan untuk mengisi formulir.

3. Atur Waktu Batas: Anda dapat mengatur startDateTime dan endDateTime sesuai dengan waktu mulai dan berakhirnya pengisian formulir. Contoh pada program ini mengatur batas waktu selama 90 menit setelah startDateTime.

4. Atur Jarak Maksimum:Anda dapat mengubah maxDistanceInMeters untuk mengatur jarak maksimum dalam meter yang diperbolehkan dari koordinat yang diizinkan.

5. Jalankan Program:Jalankan fungsi setFormAccessAndTimeLimit untuk mengatur akses dan batas waktu formulir yang ditentukan. Anda dapat memanggil fungsi ini untuk beberapa formulir yang berbeda dengan parameter yang sesuai.

6. Hasil:Jika pengguna berada dalam jarak yang diizinkan dan waktu saat ini berada dalam rentang waktu yang ditentukan, formulir akan diizinkan untuk diisi. Jika tidak, formulir akan ditutup untuk pengisian.

7. Penyesuaian Lanjutan:Anda dapat menyesuaikan kode ini sesuai dengan kebutuhan Anda, seperti menambahkan pemberitahuan atau pesan kesalahan khusus.


Note :
ID_FORM1.js untuk 1 FORM GOOGLE
ID_Form2++.js untuk >2 FORM GOOGLE