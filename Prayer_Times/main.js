function ci() {
  let selectedCity = document.querySelector("select").value;
  return selectedCity ? selectedCity : "Cairo"; // Default to Cairo if no city is selected
}

function fetchPrayerTimes() {
  axios
    .get("http://api.aladhan.com/v1/timingsByCity", {
      params: {
        country: "EG",
        city: ci(),
      },
    })
    .then(function (response) {
      console.log(response.data.data);
      document.querySelector(".fajr .time").innerHTML =
        response.data.data.timings.Fajr;
      document.querySelector(".sunrise .time").innerHTML =
        response.data.data.timings.Sunrise;
      document.querySelector(".dhuhr .time").innerHTML =
        response.data.data.timings.Dhuhr;
      document.querySelector(".asr .time").innerHTML =
        response.data.data.timings.Asr;
      document.querySelector(".maghrib .time").innerHTML =
        response.data.data.timings.Maghrib;
      document.querySelector(".isha .time").innerHTML =
        response.data.data.timings.Isha;
        document.querySelector(".date").innerHTML =
          response.data.data.date.gregorian.date;
        document.querySelector(".day").innerHTML =
          response.data.data.date.hijri.weekday.ar;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Event listener to fetch prayer times when a city is selected
let cities = document.querySelectorAll("select");
cities.forEach((city) => {
  city.addEventListener("change", fetchPrayerTimes);
});

// Fetch prayer times for the default city (Cairo) on page load
fetchPrayerTimes();
