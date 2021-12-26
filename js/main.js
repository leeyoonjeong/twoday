

console.log(" day 2  ")
// Nodelist 유사배열 
//     items[ 0 ].style.display = "none"  ;
//     items[ 1 ].style.display = "none"  ;
 //    items[ 2 ].style.display = "none"  ;
 let sum = 0 ;
 let sum2 = 0 ;
 //console.log(7%3) ;
 for(let i=0; i<10 ; i+=1 ) {
     if(i%2 === 0 ) continue ;
        sum = sum + i ;
    console.log( "i==" + i , "sum=" + sum , "sum2=" + sum2) ;
 }
  
 console.log(sum) ;

 //rest api     url/user/01 
// https://www.themoviedb.org/movie/497698-black-widow?language=ko
// https://www.themoviedb.org/person/1245-scarlett-johansson?language=ko
// https://www.themoviedb.org/rivew/497698-black-widow?language=ko
// 루콜라스  tmdb 



 const fruits = ["orange","apple" ,"tomato" , "shine" ,"kiwi"]

 console.log(fruits.length) ;

 // sample1
 for(let i =0 ; i<fruits.length ; i++ ) {
    console.log(  fruits[i]) ;
 }

// 순환 
fruits.forEach((item, i) => {
        console.log(item);
    });

// 같음..
fruits.forEach( function(item, i) {
        console.log(item);
 });

 
 const computeritems = document.querySelectorAll("#computer li") ;
 const humanItems = document.querySelectorAll("#human li");

 const resultCover = document.querySelector("#resultCover");
 const restartBtn  = document.querySelector("#btnRestart");



 let  computerchoice = 0 ;
 let  clearTimeOutID  =null  ;

 let gameCount = 0 ;


function computerSelect () {
    /*
    for(let i =0 ; i<items.length ; i++ ) {
         items[i].style.display = "none"  ;
   } */

   //items.forEach(function(myitem,i ,array ){   myitem : document.querySelectorAll("#computer li")  가리킴.
   computeritems.forEach(function(myitem,i ,array ){
       myitem.style.display ="none" ;
   }) ;

   const  random =  Math.floor( Math.random()*3  ); 

   computeritems[random].style.display = "block"  ;
   computerchoice = random ; 

}
let clearID = setInterval(computerSelect , 10) ;  // 0.01초 마다 
const resultList =  document.querySelector("#resultList");

 
 


 const clickItem = function(e) 
{
   //  function(){
       clearInterval(clearID) ;
       
       const userPick = parseInt(e.currentTarget.dataset.id ) ; // 형변환이 필요 


        
       console.log("computer choie " , computerchoice , "human choie " , userPick );

     if( computerchoice === userPick  ) { 
           resultList.innerHTML +='<li class="draw"><span>D</span></li>' ;
        // resultList.appendChild ('<li class="draw"><span>D</span></li>'  );
     } else if   (  ( computerchoice ===0  && userPick ===1  ) || 
                     (computerchoice ===1  && userPick ===2  )  || 
                     (computerchoice ===2  && userPick ===0  )   

     ) { 
        // console.log (" 내가 이겼다 ") ;
        resultList.innerHTML +='<li class="win"><span>W</span></li>' ;

    } else {
        resultList.innerHTML +='<li class="lose"><span>L</span></li>' ;
         
     }

     humanItems.forEach(function(item,i){
        item.removeEventListener("click",clickItem) ;   // 사용자 멈추기 
    });
     

    
    if(clearTimeOutID !== null) {
        clearTimeout(clearTimeOutID) ; //  멈추기 
      
    }


     clearTimeOutID =  setTimeout(function(){
        clearID = setInterval(computerSelect , 10) ;  // 0.01초 마다 


        humanItems.forEach(function(item,i){
            item.addEventListener("click",clickItem) ;

        });    
     },1000) ;
     
     gameCount++;

     if(gameCount >=3 ) {  //3게임이 되면 
        clearTimeout(clearTimeOutID) ; //  멈추기 
         resultCover.classList.remove("off") ;
         resultCover.classList.add("on") ;
         // resultCover.style.display = "block"  ;
     }
   
   // console.log( "드디어 나는 사용자가 일으키는 이벤트 중 click 이벤트를 받을 수 있게 되었다" );

//})
 }

 humanItems.forEach(function(item,i){
    item.addEventListener("click",clickItem) ;
});



restartBtn.addEventListener("click",function(){
    resultCover.classList.remove("on") ;
    resultCover.classList.add("off") ;
    gameCount = 0 ;
    resultList.innerHTML = ""  ;
    
    clearTimeOutID =  setTimeout(function(){
        clearID = setInterval(computerSelect , 10) ;  // 0.01초 마다 


        humanItems.forEach(function(item,i){
            item.addEventListener("click",clickItem) ;

        });    
     },1000) ;
     
     

    
})  ;
 

// console.log (items ) ;

// var 는 function scope let과   , const는  block scope 입니다.














/*

// const item1 = document.querySelector("#computer li") ;
document.title = "나는 타이틀 테스트 " ;

const 우리반 = ["홍길동","고대리","둘리","방탄","아이유"];

console.log(우리반[0]) ;

console.log (item1 ) ;

const now = new Date() ; 

console.log(now.getFullYear() ) ;
console.log(now.getMonth() ) ;
console.log(now.getDate() ) ;

console.log(now.getDay() ) ;

const 요일 = ["일","월","화","수","목","금","토"];

const months = now.getMonth() +1   ; 

console.log(요일[now.getDay()]) ;

console.log( months ) ;

 */

