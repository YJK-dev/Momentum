const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//padStart(maxLength, String의 글자수가 maxLength가 아니면 앞에 무엇을 붙일건지)
getClock();
setInterval(getClock, 1000);
