// const sendFirebaseData = () =>{

// let q = document.getElementById("question").value;
// let a =document.getElementById("op1").value;
// let b =document.getElementById("op2").value;
// let c =document.getElementById("op3").value;
// let d =document.getElementById("op4").value;
// let cor=document.getElementById("correct").value;

// let key = Math.floor( Math.random()*234242423131);

// let quiz = {
//     question: q,
//     a: a,
//     b: b,
//     c: c,
//     d: d,
//     correct : cor,
//     key: key
// }



// firebase.database().ref("Quiz/" + key).set(quiz);

//  }


//play button
const play = () => {
    let a =document.querySelector(".front-page");
    a.classList.add("hide");
    let c = document.querySelector(".second-page");
    c.classList.remove("hide");
}

//all variables initiilize
let dat1;
let dat2;
let dat3;
let dat4;
let dat5;
let dat6;
let dat7;
let dat8;
let dat9;
let dat10;
let val = [];

let count = 0;

let score= document.querySelector(".score");


 // for data retrieve from firebase
const getFirebaseData = () => {
    firebase.database().ref("Quiz/10721039699").once("value",function(data){
      dat1 = data.val()
       console.log(dat1.question);

    })

firebase.database().ref("Quiz/176083980905").once("value",function(data){
     dat2 = data.val();
     console.log(dat2);

})

firebase.database().ref("Quiz/14772111004").once("value",function(data){
    dat3 = data.val();
    console.log(dat3);

})

firebase.database().ref("Quiz/158338150112").once("value",function(data){
    dat4 = data.val();
    console.log(dat4);

})

firebase.database().ref("Quiz/16790625913").once("value",function(data){
    dat5 = data.val();
    console.log(dat5);

})

firebase.database().ref("Quiz/199248689443").once("value",function(data){
    dat6 = data.val();
    console.log(dat6);

})

firebase.database().ref("Quiz/215338053905").once("value",function(data){
    dat7 = data.val();
    console.log(dat7);

})

firebase.database().ref("Quiz/219842560961").once("value",function(data){
    dat8 = data.val();
    console.log(dat8);

})

firebase.database().ref("Quiz/61279689498").once("value",function(data){
    dat9 = data.val();
    console.log(dat9);

})

firebase.database().ref("Quiz/91454959649").once("value",function(data){
    dat10 = data.val();
    console.log(dat10);

})


}





getFirebaseData();



let q1 = document.getElementById("q-area");
let op1 = document.getElementById("op1-area");
let op2 = document.getElementById("op2-area");
let op3 = document.getElementById("op3-area");
let op4 = document.getElementById("op4-area");
let chk = document.querySelector(".check");

let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li5");
let li6 = document.getElementById("li6");
let li7 = document.getElementById("li7");
let li8 = document.getElementById("li8");
let li9 = document.getElementById("li9");
let li10 = document.getElementById("li10");

chk.addEventListener("click",function(){

    let z= val.slice(-1).pop();;
    console.log(z);

    if(dat1 && z === dat1.correct){
        alert("Your answer is correct")
        li1.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op3.style.visibility = "hidden";
        
        
    }

    else if(dat2 && z === dat2.correct){
        alert("Your answer is correct")
        li2.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op3.style.visibility = "hidden";
        
        
    }

    else if(dat3 && z === dat3.correct){
        alert("Your answer is correct")
        li3.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op2.style.visibility = "hidden";
    }

    else if(dat4 && z === dat4.correct){
        alert("Your answer is correct")
        li4.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op4.style.visibility = "hidden";
    }

    else if(dat5 && z === dat5.correct){
        alert("Your answer is correct")
        li5.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op4.style.visibility = "hidden";
    }

    else if(dat6 && z === dat6.correct){
        alert("Your answer is correct")
        li6.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op2.style.visibility = "hidden";
    }

    else if(dat7 && z === dat7.correct){
        alert("Your answer is correct")
        li7.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op2.style.visibility = "hidden";
    }

    else if(dat8 && z === dat8.correct){
        alert("Your answer is correct")
        li8.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op3.style.visibility = "hidden";
    }

    else if(dat9 && z === dat9.correct){
        alert("Your answer is correct")
        li9.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op1.style.visibility = "hidden";
    }

    else if(dat10 && z === dat10.correct){
        alert("Your answer is correct")
        li10.classList.add("disabled");
        alert("Go to next Question from Numbers written at bottom");
        score.innerHTML = "Score:" + ++count;
        op3.style.visibility = "hidden";
        score.innerHTML = "Final Score: " + count;
    }




    else{
        alert("your answer is wrong")
        score.innerHTML = "Score:" + --count;

    }
})




   


let startbtn  = document.querySelector(".startbtn");

//li1
startbtn.addEventListener("click",function(){

    q1.innerHTML = dat1.question;
     
    op1.innerHTML = dat1.a;
    op2.innerHTML = dat1.b;
    op3.innerHTML = dat1.c;
    op4.innerHTML = dat1.d;   

    op1.addEventListener("click",function(){
        val.push(dat1.a);
        console.log(val);
    })
    
    op2.addEventListener("click",function(){
        val.push(dat1.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat1.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat1.d);
        console.log(val);
    })
    

})




//li2


li2.addEventListener("click",function(){

    q1.innerHTML = dat2.question;
     
    op1.innerHTML = dat2.a;
    op2.innerHTML = dat2.b;
    op3.innerHTML = dat2.c;
    op4.innerHTML = dat2.d; 
    
    op1.addEventListener("click",function(){
        val.push(dat2.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat2.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat2.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat2.d);
        console.log(val);
    })

    op3.style.visibility = "visible";
        
    
})



//li3

li3.addEventListener("click",function(){

    q1.innerHTML = dat3.question;
     
    op1.innerHTML = dat3.a;
    op2.innerHTML = dat3.b;
    op3.innerHTML = dat3.c;
    op4.innerHTML = dat3.d;   

    op1.addEventListener("click",function(){
        val.push(dat3.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat3.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat3.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat3.d);
        console.log(val);
    })

    op3.style.visibility = "visible";
    
})


//li4

li4.addEventListener("click",function(){

    q1.innerHTML = dat4.question;
     
    op1.innerHTML = dat4.a;
    op2.innerHTML = dat4.b;
    op3.innerHTML = dat4.c;
    op4.innerHTML = dat4.d;   

    op1.addEventListener("click",function(){
        val.push(dat4.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat4.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat4.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat4.d);
        console.log(val);
    })
    op2.style.visibility = "visible";
    
})


//li5

li5.addEventListener("click",function(){

    q1.innerHTML = dat5.question;
     
    op1.innerHTML = dat5.a;
    op2.innerHTML = dat5.b;
    op3.innerHTML = dat5.c;
    op4.innerHTML = dat5.d;  
    
    op1.addEventListener("click",function(){
        val.push(dat5.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat5.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat5.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat5.d);
        console.log(val);
    })
    op4.style.visibility = "visible";
    
})



//li6

li6.addEventListener("click",function(){

    q1.innerHTML = dat6.question;
     
    op1.innerHTML = dat6.a;
    op2.innerHTML = dat6.b;
    op3.innerHTML = dat6.c;
    op4.innerHTML = dat6.d; 
    
    op1.addEventListener("click",function(){
        val.push(dat6.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat6.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat6.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat6.d);
        console.log(val);
    })
    op4.style.visibility = "visible";
    
})


//li7

li7.addEventListener("click",function(){

    q1.innerHTML = dat7.question;
     
    op1.innerHTML = dat7.a;
    op2.innerHTML = dat7.b;
    op3.innerHTML = dat7.c;
    op4.innerHTML = dat7.d;   

    op1.addEventListener("click",function(){
        val.push(dat7.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat7.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat7.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat7.d);
        console.log(val);
    })
    op2.style.visibility = "visible";
    
})


//li8

li8.addEventListener("click",function(){

    q1.innerHTML = dat8.question;
     
    op1.innerHTML = dat8.a;
    op2.innerHTML = dat8.b;
    op3.innerHTML = dat8.c;
    op4.innerHTML = dat8.d; 
    
    op1.addEventListener("click",function(){
        val.push(dat8.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat8.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat8.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat8.d);
        console.log(val);
    })
    op2.style.visibility = "visible";
    
})

//li9

li9.addEventListener("click",function(){

    q1.innerHTML = dat9.question;
     
    op1.innerHTML = dat9.a;
    op2.innerHTML = dat9.b;
    op3.innerHTML = dat9.c;
    op4.innerHTML = dat9.d;   

    op1.addEventListener("click",function(){
        val.push(dat9.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat9.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat9.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat9.d);
        console.log(val);
    })
    op3.style.visibility = "visible";
    
})

//li10

li10.addEventListener("click",function(){

    q1.innerHTML = dat10.question;
     
    op1.innerHTML = dat10.a;
    op2.innerHTML = dat10.b;
    op3.innerHTML = dat10.c;
    op4.innerHTML = dat10.d; 
    
    op1.addEventListener("click",function(){
        val.push(dat10.a);
        console.log(val);
    })

    op2.addEventListener("click",function(){
        val.push(dat10.b);
        console.log(val);
    })

    op3.addEventListener("click",function(){
        val.push(dat10.c);
        console.log(val);
    })

    op4.addEventListener("click",function(){
        val.push(dat10.d);
        console.log(val);
    })
    op1.style.visibility = "visible";

    
    })
    









//Add options Value to array

// const addValA = () =>{
//     val.push(dat1.a);
//     console.log(val);
// }














