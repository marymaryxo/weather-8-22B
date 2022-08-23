function changeF(event) {
  event.preventDefault();
  currentTEMP.innerHTML = "42°F";
}

function changeC(event) {
  event.preventDefault();
  currentTEMP.innerHTML = "6°C";
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var timeinAMPM = hours + ":" + minutes + " " + ampm;
  return timeinAMPM;
}

function displayCity(city) {
  city.preventDefault();
  if (enterCity.value !== "") {
    h1.innerHTML = `${enterCity.value.toLowerCase()}`;
  } else {
    h1.innerHTML = `chicago`;
  }
}

let now = new Date();

let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

let day = days[now.getDay()];

let h1 = document.querySelector("h1");

let h4 = document.querySelector("h4");
h4.innerHTML = `it is currently ${day} ${formatAMPM(now)}`;

let currentTEMP = document.querySelector(".currentTEMP");

let fDegreesJS = document.querySelector(".fDegrees");
fDegreesJS.addEventListener("click", changeF);

let cDegreesJS = document.querySelector(".cDegrees");
cDegreesJS.addEventListener("click", changeC);

let searchForCity = document.querySelector("#submitButton");
searchForCity.addEventListener("click", displayCity);
