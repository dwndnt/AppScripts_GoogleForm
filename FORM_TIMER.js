function setFormAccessAndTimeLimit() {
  // ID FORM
  var form = FormApp.openById('1HBHVeSbuRu2MwRtUapt5Wk4lBREeeGibf8svhQzasSs');

  // Waktu saat formulir akan diaktifkan
  var startDateTime = new Date('2023-11-12T20:17:00');

  // Waktu penutupan formulir (90 menit setelah diaktifkan)
  var endDateTime = new Date(startDateTime.getTime() + (90 * 60 * 1000)); // 90 menit dalam milidetik

  // Atur formulir ke mode "Hanya Terima Respon"
  form.setAcceptingResponses(false);

  // Hanya izinkan akses formulir jika waktu aktif
  if (new Date() >= startDateTime && new Date() <= endDateTime) {
    form.setAcceptingResponses(true);
  }
}
