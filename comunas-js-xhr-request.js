
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.nubox.com/Nubox.API/factura/comunas");
xhr.setRequestHeader("token", "8b47950f-42cf-4ecd-9a9c-4bbcc86a86d2");

xhr.send();
