function ci() {
  let selectedCity = document.querySelector("select").value;
  return selectedCity ? selectedCity : "Cairo"; // Default to Cairo if no city is selected
}

function fetchPrayerTimes() {
  let city = ci();
  let url = `http://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      let prayerData = data.data;

      console.log(prayerData);
      document.querySelector(".fajr .time").innerHTML = prayerData.timings.Fajr;
      document.querySelector(".sunrise .time").innerHTML = prayerData.timings.Sunrise;
      document.querySelector(".dhuhr .time").innerHTML = prayerData.timings.Dhuhr;
      document.querySelector(".asr .time").innerHTML = prayerData.timings.Asr;
      document.querySelector(".maghrib .time").innerHTML = prayerData.timings.Maghrib;
      document.querySelector(".isha .time").innerHTML = prayerData.timings.Isha;
      document.querySelector(".date").innerHTML = prayerData.date.gregorian.date;
      document.querySelector(".day").innerHTML = prayerData.date.hijri.weekday.ar;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

// Event listener to fetch prayer times when a city is selected
let cities = document.querySelectorAll("select");
cities.forEach((city) => {
  city.addEventListener("change", fetchPrayerTimes);
});

// Fetch prayer times for the default city (Cairo) on page load
fetchPrayerTimes();
