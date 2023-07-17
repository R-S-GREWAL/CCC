var score = 0;
var score2 = 0;
Q1_rb = 0;
Q2_rb = 0;
Q3_rb = 0;
Q4_rb = 0;
Q5_rb = 0;

function Login()
{
    window.location = "index.html";
}
function causes()
{
    window.location = "causes.html";
}
function test()
{
    window.location = "test.html";
}
function intro1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("sym1");
  var btnText1 = document.getElementById("btnintro1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
}
function intro2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("sym2");
  var btnText2 = document.getElementById("btnintro2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}
function intro3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("sym3");
  var btnText3 = document.getElementById("btnintro3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}
function intro4() {
  var dots4 = document.getElementById("dots4");
  var moreText4 = document.getElementById("sym4");
  var btnText4 = document.getElementById("btnintro4");

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "Read more";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read less";
    moreText4.style.display = "inline";
  }
}
function intro5() {
  var dots5 = document.getElementById("dots5");
  var moreText5 = document.getElementById("sym5");
  var btnText5 = document.getElementById("btnintro5");

  if (dots5.style.display === "none") {
    dots5.style.display = "inline";
    btnText5.innerHTML = "Read more";
    moreText5.style.display = "none";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = "Read less";
    moreText5.style.display = "inline";
  }
}



function result1() {
if(Q1_rb.get()=="yes")
{
score = score+1;
}
if(Q2_rb.get()=="yes")
{
score = score+1;
}
if(Q3_rb.get()=="yes")
{
score = score+1;
}
if(Q4_rb.get()=="yes")
{
score = score+1;
}
if(Q5_rb.get()=="yes")
{
score = score+1;
}
}
function test1()
{
if (score = 1){
    document.getElementById("result1").innerHTML = "You don't need to consult to a Doctor.";
    }
else if (score = 2){
    document.getElementById("result1").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
else if (score = 3){
    document.getElementById("result1").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
else if (score = 4){
    document.getElementById("result1").innerHTML = "I strongly advise you to consult to a Doctor.";
    }
else{
    document.getElementById("result1").innerHTML = "I strongly advise you to consult to a Doctor.";
}
}








function result2() {
   
 
  if(document.getElementById("test2yes1").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }
 
 
 
 
  if(document.getElementById("test2yes2").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }
 
 
 
  if(document.getElementById("test2yes3").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }
 
 
 
 
  if(document.getElementById("test2yes4").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }
 
 
 
  if(document.getElementById("test2yes5").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }



  if(document.getElementById("test2yes6").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }


 
  if(document.getElementById("test2yes7").get()==yes)
  {
    score2 = score2 + 1
  }
  else
  {
    score2 = score2 + 0
  }
 
  }
function test2()
  {
  if (score2 = 1){
    document.getElementById("result2").innerHTML = "You don't need to consult to a Doctor.";
      }
  else if (score2 = 2){
    document.getElementById("result2").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
  else if (score2 = 3){
    document.getElementById("result2").innerHTML = "You might perhaps need to consult to a Doctor.";
    }
  else if (score2 = 4){
    document.getElementById("result2").innerHTML = "I advise you to consult to a Doctor.";
    }
  else if (score2 = 5){
    document.getElementById("result2").innerHTML = "I advise you to consult to a Doctor.";
    }
  else if (score2 = 6){
    document.getElementById("result2").innerHTML = "I strongly advise you to consult to a Doctor.";
    }
  else{
    document.getElementById("result2").innerHTML = "I strongly advise you to consult to a Doctor.";
    }


  }



  