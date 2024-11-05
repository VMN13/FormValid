document.getElementById('input').addEventListener('click', loadText);

function loadText() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:9090/api/registration', true);
  xhr.onload = function() {
    if (this.status == 200) {
     console.log(this.responseText);
    } else if (this.status == 400) {
      console.log(this.responseText);
    }
  }
  xhr.send();
}