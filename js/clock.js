



// 함수선언식 
function aa(){
    console.log ("bbb") ;
}


//  즉시실행함수  한번만 쓰고 사라짐 
(function onetime(){
    console.log ("즉시실행함수 ") ;
 })();  //  iiee  즉시실행함수 



// 함수 표현식 (expression )    익명함수 
const 익명 = function(){
    console.log("익명 함수  ");
}


// 에크바 2015 
const 익명1 = ()=> {
    console.log("익명 함수1  ");
}

// setInterval(  function () {    console.log ("zzz") } , 1000 ) ;

setInterval(   aa  , 1000 ) ; // brower 에게 넘김
setInterval(   showtime   , 1000 ) ; // 한번만실행후 스택에서 나감  에게 넘김

익명( ) ;  // 익명 호출 
익명1( ) ;  // 익명 호출1

function addZero( num1 ) {

    if(num1 <10) {
          // return '0${num1}'  ;
          return  "0"+num1  ;
    }else {
        // return num1 ; 
        return ""+num1 ; 
    }
    
}

const newNUM = addZero(9) ;

console.log(newNUM) ; 


function showtime () {
    
    const clock = document.querySelector("#clock") ;
    const now = new Date() ;
    let hour =  addZero( now.getHours   () ) ;
    let min  =  addZero( now.getMinutes () ) ;
    let sec =   addZero( now.getSeconds () ) ;

  
 
        clock.textContent =  `${hour}:${min}:${sec}`   ;

}


//const navi = document.querySelector("#navi") ;

//navi.textContent = navigator.userAgent ;



