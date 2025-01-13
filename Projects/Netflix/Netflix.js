const selecti = document.querySelector(".selecti");
const container = document.querySelector(".container");
const box1 = document.querySelector(".box1");

const input1 = document.querySelector(".enter input");
const enter = document.querySelector(".enter");
const label1 = document.querySelector(".enter label");
const input2 = document.querySelector(".enters input");
const enters = document.querySelector(".enters");
const label2 = document.querySelector(".enters label");
const previousdabba = document.querySelector(".preBtn");
const nextdabba = document.querySelector(".nextBtn");
const previousBtn = document.querySelector(".preBtn .prev");
const nextBtn = document.querySelector(".nextBtn .next");
const unorderedLists = document.querySelector(".unorderedLists ul")



const box21 = document.querySelector(".box21")

enter.addEventListener("click",()=>{
    label1.style.top ="1rem";
    label1.style.left ="1rem";
    label1.style.fontSize =".8rem";
    
})
label1.addEventListener("click",()=>{
    input1.focus();
})
enters.addEventListener("click",()=>{
    label2.style.top ="1rem";
    label2.style.left ="1.25rem";
    label2.style.fontSize =".8rem";
    
})
label2.addEventListener("click",()=>{
    input2.focus();
})



selecti.addEventListener("click", ()=>{
    selecti.style.outline = "2px solid #fff";
    selecti.style.outlineOffset = "2px";
    // selecti.style.border ="1px solid #645e5e";
})
// .addEventListener("click", ()=>{
//     selecti.style.outline = "none";
//     // selecti.style.outlineOffset = "2px";
// })
previousdabba.style.opacity="0";
previousBtn.addEventListener("click",()=>{
    unorderedLists.style.transform="translateX(0%)";  
    previousdabba.style.left="-60px"; 
    nextdabba.style.right="0px"
    previousdabba.style.opacity="0";
    nextdabba.style.opacity="2.5";
})
nextBtn.addEventListener("click",()=>{
    unorderedLists.style.transform ="translateX(-40%)";
    nextdabba.style.right="-60px"
    previousdabba.style.left="0px"; 
    nextdabba.style.opacity="0";
    previousdabba.style.opacity="2.5";
})
const dabba12 = document.querySelectorAll(".dabba12");
const dabba22 = document.querySelectorAll(".dabba2");

dabba12.forEach(function(dabba){


dabba.addEventListener("click",(e)=>{
    let dabba = e.currentTarget;
    let dabba2 = dabba.nextElementSibling;
    
    dabba22.forEach(function(dabba23){
        if(dabba2.id !== dabba23.id){
        if(dabba23.style.height !== "0px"){
            dabba23.style.height = "0px";
        }
    }
    })
    if (dabba2.style.height === '0px' || dabba2.style.height === '') {
        // Expand the shutter by setting its height to 'auto'
        dabba2.style.height = dabba2.scrollHeight + 'px'; // Automatically adjust to content height
      } else {
        // Collapse the shutter by setting its height to '0'
        dabba2.style.height = '0px';
      }
})
})
window.addEventListener("resize",()=>{
    let BodyWidth = window.innerWidth;
    if(BodyWidth> 1416 && BodyWidth < 1500){
        let diff =  BodyWidth - 1375;
        let padd = diff*0.72;
        box21.style.marginTop = `${padd}px`;
    }
    else if(BodyWidth< 1416 && BodyWidth >1280){
        box21.style.marginTop = "40px"; 
    }
    else if(BodyWidth <= 1280){
        box21.style.marginTop = "90px";
    }
    i 
})
