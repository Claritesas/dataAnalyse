const video=document.querySelector("video")
const medicine=document.querySelector(".medicine")
const nav=document.querySelector(".nav")
const medicineList=document.querySelectorAll(".medicine li:nth-child(3) p")
const manufactureList=document.querySelectorAll(".manufacture li:nth-child(3) p")
const EcommerceList=document.querySelectorAll(".e-commerce li:nth-child(3) p")
const iconList=document.querySelectorAll(".icon li")
for(let i=0;i<iconList.length;i++){
    iconList[i].addEventListener("click",function(e){
        if(i===0){
          document.documentElement.scrollTop=0
        }
        else if(i===1){
            document.documentElement.scrollTop=800
              
        }
        else if(i===2){
            document.documentElement.scrollTop=1400     
        }
        else{
            document.documentElement.scrollTop=2000
        }
    })
}
window.addEventListener("scroll", function () {
    let n=document.documentElement.scrollTop
    if(n>=0 && n<700){
        iconList[0].style.backgroundColor='red' 
        iconList[1].style.backgroundColor='white' 
        iconList[2].style.backgroundColor='white' 
        iconList[3].style.backgroundColor='white' 
    }else if(n>=700 && n<1000){
        iconList[1].style.backgroundColor='rgb(0, 206, 200)'
        iconList[0].style.backgroundColor='white' 
        iconList[2].style.backgroundColor='white' 
        iconList[3].style.backgroundColor='white' 
    }
    else if(n>=1000 && n<1500){
        iconList[2].style.backgroundColor='rgb(254, 219, 120)'
        iconList[0].style.backgroundColor='white' 
        iconList[3].style.backgroundColor='white' 
        iconList[1].style.backgroundColor='white' 
    }
    else{
        iconList[3].style.backgroundColor='green'
        iconList[0].style.backgroundColor='white' 
        iconList[2].style.backgroundColor='white' 
        iconList[1].style.backgroundColor='white' 
    }   
});
window.addEventListener("scroll", function () {
    let n=document.documentElement.scrollTop
    if(n>0){
        video.style.height=800+'px'
        video.style.objectFit='cover'
        medicine.style.top=800+'px'
        energy.style.top=800+'px'

    }else{
        medicine.style.top=750+'px'
        // energy.style.top=850+'px'
        video.style.height=930+'px'
        medicine.style.transition='all 0.5s'
    }   
});
window.addEventListener("scroll", function () {
    let n=document.documentElement.scrollTop
    if(n>=700){  
            nav.style.display='none'
    }else{
            nav.style.display='block'    
    }   
});
for(let i=0;i<medicineList.length;i++){
   medicineList[i].addEventListener("click",function(){
    if(i===0){
        window.open("http://localhost:37799/webroot/decision/link/pwP4")
    }
    else if(i===1){
        window.open("http://localhost:37799/webroot/decision/link/Uzv2")
    }
    else if(i===2){
        window.open("http://localhost:37799/webroot/decision/link/N9Pk")
    }
    else if(i===3){
        window.open("http://localhost:37799/webroot/decision/link/TLsy")
    }
    else{
        window.open("http://localhost:37799/webroot/decision/link/5C2v")
    }
   })
        
}
for(let i=0;i<manufactureList.length;i++){
    manufactureList[i].addEventListener("click",function(){
     if(i===0){
         window.open("http://localhost:37799/webroot/decision/link/6dE0")
     }
     else if(i===1){
         window.open("http://localhost:37799/webroot/decision/link/u7bi")
     }
     else if(i===2){
         window.open("http://localhost:37799/webroot/decision/link/GbhD")
     }
     else{
         window.open("http://localhost:37799/webroot/decision/link/5P1B")
     }
    })
         
 }
 for(let i=0;i<EcommerceList.length;i++){
    EcommerceList[i].addEventListener("click",function(){
     if(i===0){
         window.open("http://localhost:37799/webroot/decision/link/QnvC")
     }
     else if(i===1){
         window.open("http://localhost:37799/webroot/decision/link/suhJ")
     }
     else if(i===2){
         window.open("http://localhost:37799/webroot/decision/link/PLpI")
     }
     else if(i===3){
        window.open("http://localhost:37799/webroot/decision/link/LwvI")
    }
    else if(i===4){
        window.open("http://localhost:37799/webroot/decision/link/yldN")
    }
     else{
         window.open("http://localhost:37799/webroot/decision/link/UaT7")
     }
    })
         
 }
document.querySelector(".energy").addEventListener("click",function(){
    window.open("http://localhost:37799/webroot/decision/link/QgYP")
})
