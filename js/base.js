var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://124.70.33.170:3000/theme/../vip', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send('code=123');
