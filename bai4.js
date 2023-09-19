//  // Get a user
//  var url = "http://localhost:8080/api/v1/users";
//  var xhr = new XMLHttpRequest()
//  xhr.open('GET', url + '/1', true)
//  xhr.onload = function () {
//      var users = JSON.parse(xhr.responseText);
//      if (xhr.readyState == 4 && xhr.status == "200") {
//          console.table(users);
//      } else {
//          console.error(users);
//      }
//  }
//  xhr.send(null);
// var url = "http://localhost:8080/api/v1/users";
var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest();
xhr.open('GET', url + '/1', true);
xhr.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        var users = JSON.parse(xhr.responseText);
        console.table(users);
        document.getElementById("demo").textContent = JSON.stringify(users, null, 2);
    } else {
        console.error('Failed to fetch data.');
        document.getElementById("demo").textContent = 'Failed to fetch data.';
    }
};
xhr.send(null);