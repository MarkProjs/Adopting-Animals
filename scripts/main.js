function dateAndTime() {
  const now = new Date();

  const dateOptions ={
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  };

  document.getElementById("date").textContent = now.toLocaleString("en-US", dateOptions);
  document.getElementById("time").textContent = now.toLocaleString("en-US", timeOptions);
}
setInterval(dateAndTime, 1000);
dateAndTime();