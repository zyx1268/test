const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://124.70.33.170:3000/');
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    debugger;
    const headers = xhr.getAllResponseHeaders();
    console.log(headers);
  }
};
xhr.send();
