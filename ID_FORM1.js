function setFormAccessAndTimeLimit() {
  // ID FORM
  var form = FormApp.openById('1HBHVeSbuRu2MwRtUapt5Wk4lBREeeGibf8svhQzasSs');

  // Koordinat geografis yang diizinkan
  var allowedLatitude = 3.5559207085518296;
  var allowedLongitude = 98.87953800296931;

  // Waktu saat formulir akan diaktifkan
  var startDateTime = new Date('2023-11-09T00:00:00');

  // Waktu penutupan formulir (90 menit setelah diaktifkan)
  var endDateTime = new Date(startDateTime.getTime() + (90 * 60 * 1000)); // 90 menit dalam milidetik

  // Atur formulir ke mode "Hanya Terima Respon"
  form.setAcceptingResponses(false);

  // Dapatkan alamat IP pengguna
  var userCoordinates = {
    latitude: 3.555973925900014,
    longitude: 98.87957899970182
  };

  // Batasi akses formulir hanya untuk peserta yang berada di lokasi yang diizinkan
  if (isWithinRange(userCoordinates, allowedLatitude, allowedLongitude) &&
      new Date() >= startDateTime && new Date() <= endDateTime) {
    form.setAcceptingResponses(true);
  }
}

// Fungsi untuk memeriksa apakah koordinat pengguna berada dalam jarak tertentu dari koordinat yang diizinkan
function isWithinRange(userCoordinates, allowedLatitude, allowedLongitude) {
  var maxDistanceInMeters = 1000; // Jarak maksimum dalam meter
  var earthRadius = 6371000; // Radius Bumi dalam meter

  var dLat = deg2rad(allowedLatitude - userCoordinates.latitude);
  var dLon = deg2rad(allowedLongitude - userCoordinates.longitude);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(userCoordinates.latitude)) * Math.cos(deg2rad(allowedLatitude)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distance = earthRadius * c;

  return distance <= maxDistanceInMeters;
}

// Fungsi untuk mengkonversi sudut ke radian
function deg2rad(deg) {
  return deg * (Math.PI/180);
}
