# Auto Close Google Form by Quota

Repository ini berisi Google Apps Script untuk menutup Google Form secara otomatis ketika jumlah responden sudah mencapai kuota tertentu dan mengirim notifikasi email.

## Cara Pakai
1. Salin kode pada `Code.gs` ke editor Apps Script pada Google Form Anda.
2. Sesuaikan nilai `limit` jika ingin mengubah batas maksimal pendaftar.
3. Set trigger pada Google Apps Script:
   - Pilih menu "Triggers" > "Add Trigger"
   - Pilih fungsi `checkResponseCount`
   - Event type: "On form submit"
4. Setelah setup, form akan otomatis tertutup jika kuota penuh, dan Anda akan menerima email notifikasi.

---

**Catatan:**  
- Pastikan Apps Script Anda sudah diberi izin untuk mengakses Form dan mengirim email.
- Email notifikasi dikirim ke email Google Anda yang sedang login.
