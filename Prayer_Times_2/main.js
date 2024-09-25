function ci() {
  let selectedCity = document.querySelector("select").value;
  return selectedCity ? selectedCity : "Cairo"; // Default to Cairo if no city is selected
}

function fetchPrayerTimes() {
  let xhr = new XMLHttpRequest();
  let city = ci();
  let url = `http://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`;

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let data = response.data;

      console.log(data);
      document.querySelector(".fajr .time").innerHTML = data.timings.Fajr;
      document.querySelector(".sunrise .time").innerHTML = data.timings.Sunrise;
      document.querySelector(".dhuhr .time").innerHTML = data.timings.Dhuhr;
      document.querySelector(".asr .time").innerHTML = data.timings.Asr;
      document.querySelector(".maghrib .time").innerHTML = data.timings.Maghrib;
      document.querySelector(".isha .time").innerHTML = data.timings.Isha;
      document.querySelector(".date").innerHTML = data.date.gregorian.date;
      document.querySelector(".day").innerHTML = data.date.hijri.weekday.ar;
    } else if (xhr.readyState === 4) {
      console.log("Error:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.log("Request failed");
  };

  xhr.send();
}

// Event listener to fetch prayer times when a city is selected
let cities = document.querySelectorAll("select");
cities.forEach((city) => {
  city.addEventListener("change", fetchPrayerTimes);
});

// Fetch prayer times for the default city (Cairo) on page load
fetchPrayerTimes();
