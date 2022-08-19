const remainTime = document.querySelector('h1#time');

function diffDay() {
  const masTime = Date.parse(new Date("2022/08/22 09:30"));
  const todayTime = Date.parse(new Date());
  const diff = masTime - todayTime;

  const diffDay = String(Math.floor(diff / (1000*60*60*24)));
  const diffHour = String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
  const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
  const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");

  // console.log(remainTime);
  // remainTime.innerText = 'test';
  remainTime.innerHTML = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);

function convertDateForIos(date) {
  var arr = date.split(/[- :]/);
  date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
  return date;
}