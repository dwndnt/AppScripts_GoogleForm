function setFormAccessAndTimeLimit(formId, allowedLatitude, allowedLongitude) {
  var form = FormApp.openById(formId);

  var startDateTime = new Date('2023-11-08T23:00:00');
  var endDateTime = new Date(startDateTime.getTime() + (90 * 60 * 1000));

  form.setAcceptingResponses(false);

  var userCoordinates = {
    latitude: 3.5572984395727816,  // Ganti dengan koordinat pengguna yang sesuai
    longitude: 98.8678735800608
  };

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


setFormAccessAndTimeLimit('ID_Form_1', 3.5559207085518296, 98.87953800296931);
setFormAccessAndTimeLimit('ID_Form_2', 3.558123456789, 98.876543210987);