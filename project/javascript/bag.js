const data = localStorage.getItem("session");
var container = document.getElementById("name");

var ulHTML = "<ul style='list-style-type: none;margin-left:-2rem'>";
for (let i = 0; i < data.split("}").length - 1; i++) {
  ulHTML += "<li>" + JSON.parse(data.split("},")[i] + "}").name + "</li>";
}
ulHTML += "</ul>";
container.innerHTML = ulHTML;

var price = document.getElementById("price");
var sum = 0;
var ulHTML = "<ul style='list-style-type: none;margin-left:-2rem'>";
for (let i = 0; i < data.split("}").length - 1; i++) {
  ulHTML += "<li>" + JSON.parse(data.split("},")[i] + "}").price + "$</li>";
  sum += JSON.parse(data.split("},")[i] + "}").price;
}
ulHTML += "</ul>";
price.innerHTML = ulHTML;

document.getElementById("sum").innerHTML = sum;

const done = () => {
  localStorage.removeItem("session");
  location.reload();
};
