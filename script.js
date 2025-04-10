let deadline = "2025-04-10 09:43"; //создаем дату


function getTimer(endTime) {
  let t = Date.parse(endTime) - Date.parse(new Date()); // нашли сколтко  времени осталось до конца таймера
  let days = Math.floor(t / 1000 / 60 / 60 / 24); //переволим в дни
  let hours = Math.floor((t / 1000 / 60 / 60) % 24); // в часы
  let minutes = Math.floor((t / 1000 / 60) % 60);// в минуты
  let seconds = Math.floor((t / 1000) % 60); // в секунды

  // Если таймер прошол возвращаем 00
  if (t <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { days, hours, minutes, seconds };
}

function setTimer(endTime, selector) {
  let t = document.querySelector(selector);
//Находим дни,часы,минуты,секунды
  let days = t.querySelector("#days");
  let hours = t.querySelector("#hours");
  let minutes = t.querySelector("#minutes");
  let seconds = t.querySelector("#seconds");

  let interval = setInterval(updateTime, 1000);//обновляем старницу каждую скунду

//Сколько времени осталось на данный момент
  function updateTime() {
    let t = getTimer(endTime);
    //Добавили 0 в перёд
    days.textContent = String(t.days).padStart(2, "0");
    hours.textContent = String(t.hours).padStart(2, "0");
    minutes.textContent = String(t.minutes).padStart(2, "0");
    seconds.textContent = String(t.seconds).padStart(2, "0");

    if (
      t.days === 0 &&
      t.hours === 0 &&
      t.minutes === 0 &&
      t.seconds === 0
    ) {
      clearInterval(interval);
    }
//Останавливаем таймер если всё равно 00
  }

  updateTime(); // обновляяем
}

//ВЫзываем таймер
setTimer(deadline, ".timer");
