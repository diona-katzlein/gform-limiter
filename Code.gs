// Fungsi ini akan dijalankan setiap kali ada yang mengirimkan formulir
function checkResponseCount() {
  // Tentukan batas jumlah pendaftar
  var limit = 70;

  // Dapatkan formulir yang aktif saat ini
  var form = FormApp.getActiveForm();

  // Hitung jumlah tanggapan yang sudah masuk
  var responseCount = form.getResponses().length;

  // Cek apakah jumlah tanggapan sudah mencapai atau melebihi batas
  if (responseCount >= limit) {
    // Jika sudah, tutup formulir
    form.setAcceptingResponses(false);

    // (Opsional) Kirim notifikasi email ke diri sendiri bahwa kuota sudah penuh
    var userEmail = Session.getActiveUser().getEmail();
    var formTitle = form.getTitle();
    var subject = "Notifikasi: Kuota Formulir '" + formTitle + "' Telah Penuh";

    var htmlBody = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
            }
            .container {
              width: 90%;
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #dddddd;
              border-radius: 10px;
              background-color: #f9f9f9;
            }
            .header {
              font-size: 24px;
              font-weight: bold;
              color: #d9534f;
              text-align: center;
              margin-bottom: 20px;
            }
            .content {
              font-size: 16px;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              text-align: center;
              color: #777777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              Kuota Pendaftaran Penuh
            </div>
            <div class="content">
              <p>Halo,</p>
              <p>Notifikasi ini menginformasikan bahwa formulir <strong>"${formTitle}"</strong> telah mencapai batas maksimum <strong>${limit} pendaftar</strong>.</p>
              <p>Formulir telah ditutup secara otomatis dan tidak lagi menerima tanggapan baru.</p>
            </div>
            <div class="footer">
              <p>Email ini dibuat secara otomatis oleh github.com/diona-katzlein.</p>
            </div>
          </div>
        </body>
      </html>
    `;
    MailApp.sendEmail({
      to: userEmail,
      subject: subject,
      htmlBody: htmlBody
    });
  }
}
