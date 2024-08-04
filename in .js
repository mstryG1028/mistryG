
//  MENUBTN
const menubox = document.getElementById("menubox");
var display = 0;
function hide() {
  if (display == 0) {
    menubox.style.display = "none";
    display = 1;
  } else {
    menubox.style.display = "block";
    display = 0;
  }
}
// Menubtn end

// mode change
// var root=document.querySelector(':root');
// function changemode(){
//     root.style.setProperty('--themecolor1','green');
//     root.style.setProperty('--themecolor','grey');
// }
// const optionBox = document.querySelector('.optionBox');
// var display = 0;
// function hide2() {
//   if (display == 0) {
//     optionBoxbox.style.display = "none";
//     display = 1;
//   } else {
//     optionBox.style.display = "block";
//     display = 0;
//   }
// }


// mode change end
// login button
function GotoLoginPage(){
  window.open("login.html","_parent");
}
// login buttton end

// calling function
let callbtn= document.querySelector('.callLogo');
let numberbox=document.querySelector('.numberbox');
var display = 1;
function hide1() {
  if (display == 0) {
    numberbox.style.display = "none";
    display = 1;
  } else {
    numberbox.style.display = "block";
    display = 0;
  }
}

// calling function end

// image slider

const rightarrow=document.querySelector('.rightarrow');
const leftarrow=document.querySelector('.leftarrow');
const slider=document.querySelector('.slider');
const images=document.querySelectorAll('.image');
let imagecount=images.length;
let slidenumber=1;
const nextslide=()=>{
  slider.style.transform=`translateX(-${(slidenumber)*1000}px)`;
  slidenumber++;
}
const getprevslide=()=>{
  slider.style.transform=`translateX(${(length-2)*1000}px)`;
  slidenumber--;
}
const getfirstslide=()=>{
  slider.style.transform=`translateX(0px)`;
  slidenumber = 1;
}
const getlastslide=()=>{
  slider.style.transform=`translateX(${(length-2)*1000}px)`;
  slidenumber = 1;
}
  rightarrow.addEventListener("click",()=>{
    (slidenumber < imagecount)?nextslide():getfirstslide();
  
  });
  leftarrow.addEventListener("click",()=>{
    (slidenumber >= 1)?getprevslide():getlastslide();
  
  });


// leftarrow.addEventListener("click",()=>{
//   if(slidenumber >=1){
//   slider.style.transform=`translateX(${(slidenumber-2)*1000}px)`;
//   slidenumber--;
// }else{
//   slider.style.transform=`translateX(0px)`;
//   slidenumber = 1;
// }
// });

// for autoslide
// let slideinterval;
// const startslideshow=()=>{
//   slideinterval=setInterval(() => {
//     (slidenumber < imagecount)?nextslide():getfirstslide();

//   }, 2000);
// };
// startslideshow();

// const stopslideshow=()=>{
//   clearInterval(slideinterval);
// }
// slider.addEventListener("mouseover",stopslideshow);
// slider.addEventListener("mouseout",startslideshow);

// leftarrow.addEventListener("mouseover",stopslideshow);
// leftarrow.addEventListener("mouseout",startslideshow);

// rightarrow.addEventListener("mouseover",stopslideshow);
// rightarrow.addEventListener("mouseout",startslideshow);


// image slider end

