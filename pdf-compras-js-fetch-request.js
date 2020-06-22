var myHeaders = new Headers();
myHeaders.append("token", "898e879d-ccba-40c4-898c-5d4a97f8ed9c");
myHeaders.append("Content-Type", "application/json");

var raw = "\n\nhttps://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/1-9/pdf";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.nubox.com/Nubox.API/factura/documento/15478788-7/1/1/FAC/1-9/pdf", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
