//pt a crea o data, porninde de la o valoare unix utc, este nevoie sa o inmultim mai intai cu 1000
function getDayOfTheWeek(utc) {
  const date = new Date(utc * 1000);
  //extragem ziua saptamanii, sub forma de index
  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminică";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
      break;
    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6");
  }
  //returnam ziua echivalenta indexului
  return day;
}

function getHour(utc) {
  const date = new Date(utc * 1000);
  //extragem o ora. daca ora are o valoare mai mica de 100, ii adaugam un 0
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  //extragem minutele.daca minutele au o valoare mai mica de 10, le adaugam un 0.
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
}
