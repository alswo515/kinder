// var today = new Date();
// new=내장되어있는 키워드를 생성하라 불러와라
// var hourNow = today.getHours();
// var greeting;
// if (hourNow > 18) {
//   // if(조건문)
//   greeting = 'Good Evening!!'
//   // 참이면 수행할 문장;
// } else if (hourNow > 12) {
//   greeting = 'Good Afternoon!!'
//   // 거짓이면 수행할 문장;
// } else if (hourNow > 0){
//   greeting = 'Good Morning!!'
// } else {
//   greeting = 'Welcome!!'
// }
// document.write('<span>'+greeting+'</span>');
// 최종출력은 document.write 문구로
var today = new Date();
var hourNow = today.getHours()
var greeting 
if (hourNow > 18){
    greeting ='Goodevening'
} else if (hourNow > 12){
    greeting = 'GoodAftetnoon'
} else if (hourNow > 0){
    greeting = 'GoodMorning'
} else{
    greeting='Welecome'
}
document.write('<span>'+greeting+'</span>')


alert('<h3>안녕!</h3>')
document.write('<h1>안녕!</h1>')
