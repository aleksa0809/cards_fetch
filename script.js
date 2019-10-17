fetch("adressbok-1.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let addressList = getEl("addressList");
    let listItems = "";

    data = data.sort((a, b) => {
      return a.age - b.age;
    });

    for (let i = 0; i < data.length; i++) {
      listItems += "<li>";
      listItems += '<span class="firstname">' + data[i].firstname + '</span> ';
      listItems += '<span class="lastname">' + data[i].lastname + "</span>, ";
      listItems += '<span class="email">' + data[i].email + "</span>, ";
      listItems += '<span class="phone">' + data[i].phone + "</span>, ";
      listItems += '<span class="age">' + data[i].age + "</span>";
      listItems += "</li>";
    }

    addressList.innerHTML = listItems;
  });

function getEl (id) {
  return document.getElementById(id);
}