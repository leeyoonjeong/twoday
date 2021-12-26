//자바스크립트 객체
//메서드와 속성
// 자동차
// 속성,멤버필드, properties
// 자동차.배기량 = 2000;
// 자동차.컬러 = "yellow";
// 자동차.브랜드 ="현대";
// 자동차.엑셀(); //속도 증가
// 자동차.브레이크();//속도 감소

//NodeList  유사배열

//items[0].style.display = "none";
//items[1].style.display = "none";
//items[2].style.display = "none";
/*
let sum=0;
for(let i=0; true;i++) {
    if(i>7) break; //조건을 만족해서 break를 만나면 반복문을 빠져 나간다.
    sum = sum + i;
    console.log("i==="+i,"sum==="+sum);
}
console.log(sum);
*/
/*
let sum = 0;
for(let i=0;  i<10;i++) {
    if(i%2===0) continue; //조건을 만족해서 continue를 만나면 다음 조건으로 간다.
                          //반복문은 계속 이어진다.
    sum = sum + i;
    console.log("i==="+i,"sum==="+sum);
}
*/
const computerItems = document.querySelectorAll("#computer li");
const humanItems = document.querySelectorAll("#human li");
function computerSelect(){
    /*
    for(let i=0;i<items.length;i++) {
        items[i].style.display = "none";
    }
    */
    computerItems.forEach(function(item,i){
            item.style.display="none";
    });
    const random = Math.floor(Math.random()*3);
    //console.log(random);
    computerItems[random].style.display = "block";
}
setInterval(computerSelect,10);
humanItems.forEach(function(item,i){
    item.addEventListener("click", function(){
        console.log(
        "드디어 나는 사용자가 일으키는 이벤트 중 click 이벤트를 받을 수 있게 되었다"+i);
    })
})




const sc01= 10;
function scope01() {
    const innerSc01 = sc01;
    //console.log(sc01);
    const aa = 10;
    if(true) {
        var var01 = 10;
        let let01= 20;
        const const01 = 30;
    }
    for(var i=0;i<3;i++){
        var temp = i;
    }
    //var는 function() 스코프 let과 const는 block 스코프....
    console.log("var01==",var01);
    console.log("temp==",temp);
    console.log("i===",i);
    //console.log(let01);
    //console.log(const01);
}
scope01();
//console.log(sc01);





//rest api  url/users
const fruits = ["orange","apple","kiwi","shine","totato"];
console.log(fruits.length);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits.forEach(function(item,i){
    console.log(item);
});



//console.log(item);









/*
//document.title="나는 타이틀";
//배열은 번호메기기....
const student01 = "홍길동";
const student02 = "둘리";
const student03 = "홍길동";
const student04 = "홍길동";
const 우리반 = ["홍길동","둘리","고길동","bts"];
console.log(우리반[1]);
const now = new Date();
const days = ["일","월","화","수","목","금","토"];
const months = ["Jan","Feb","화","수","목","금","토","","","","","DEC"];
console.log(days[now.getDay()]);
console.log(now.getMonth()+1);
console.log(months[now.getMonth()]);
// if(now.getDay()===0) {
//     console.log("일요일");
// } else if(now.getDay()===1) {
//     console.log("월요일");
// }
*/