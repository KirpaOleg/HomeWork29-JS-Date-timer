// const dateTest = new Date();
// const milisec = Date.parse(dateTest);
// console.log(milisec);
// console.log(dateTest);

// let date = dateTest.getDate();
// console.log(date);
// let Day = dateTest.getDay();
// console.log(Day);
// let Year = dateTest.getFullYear();
// console.log(Year);
// let Hours = dateTest.getHours();
// console.log(Hours);
// let Milliseconds = dateTest.getMilliseconds();
// console.log(Milliseconds);
// let Minutes = dateTest.getMinutes();
// console.log(Minutes);
// let Month = dateTest.getMonth();
// console.log(Month);
// let Seconds = dateTest.getSeconds();
// console.log(Seconds);
// let Time = dateTest.getTime();
// console.log(Time);
// let TimezoneOffset = dateTest.getTimezoneOffset();
// console.log(TimezoneOffset);

const mainMin = document.querySelector('.main-min');
const btnMin = document.querySelector('.button-min');

const mainMax = document.querySelector('.main-max');
const btnMax = document.querySelector('.button-max');

const main = document.querySelector('.main');
const btn = document.querySelector('.button');
const inp = document.querySelector('.inp');

btnMin.addEventListener('click', () => {
  let k = 0;
  const showSecondMin = () => {
    mainMin.innerText = k;
     k++;
     if (k === 10) {
       console.log(`Останавливаем таймер`)
       clearInterval(timerMin);
     }
   };
   
   const timerMin = setInterval(showSecondMin, 1000);
}); 

btnMax.addEventListener('click', () => {
  let k = 60;
  const showSecondMax = () => {
    mainMax.innerText = k;
     k--;
     if (k === 0) {
       console.log(`Останавливаем таймер`)
       clearInterval(timerMax);
     }
   };
   
   const timerMax = setInterval(showSecondMax, 1000);
}); 

btn.addEventListener('click', () => {
  let inpVal = parseInt(inp.value);
  console.log(inpVal);

  if (inpVal < 0 || inpVal > 3600) {
    console.log(`Что-то пошло не так! Введи число по меньше!`);
    main.innerHTML = `Введи число поменьше!`;
    clearInterval(timer);
 };

  const showSecond = () => {
    let sec = Math.floor(inpVal % 60);
    let min = Math.floor(inpVal / 60 % 60);

    if (inpVal >= 0) {
      let timerShow = `${('0' + min).slice(-2)}:${('0' + sec).slice(-2)}`;
      main.innerHTML = timerShow;
    }
    inpVal--;
   };

   const timer = setInterval(showSecond, 1000);
}); 
