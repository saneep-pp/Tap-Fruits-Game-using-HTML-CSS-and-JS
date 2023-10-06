const apple = document.querySelector(".falling-image ");
const banana = document.querySelector(".falling-image1");
const grape = document.querySelector(".falling-image2");
const jackFruit = document.querySelector(".falling-image3");
const mango = document.querySelector(".falling-image4");
const orange = document.querySelector(".falling-image5");
const papaya = document.querySelector(".falling-image6");
const pineapple = document.querySelector(".falling-image7");
const strawberry = document.querySelector(".falling-image8");
const points = document.querySelector(".points");
const levels = document.querySelector(".levels");
const plevel = document.querySelector(".plevels");
const popUp = document.querySelector(".pop-up");
const okbtnE = document.querySelector(".okbtn");



let point = 0;
let l = 1;
const fruits = [apple,banana,grape,jackFruit,mango,orange,papaya,pineapple,strawberry];
fruits.forEach(item=>{
    item.addEventListener("click",()=>{
        point+=1;
        points.textContent=point;
        item.style.display="none";
        setTimeout(display=()=> {
            item.style.display="flex";
          },4000 );
         
          if(point==10){
            l=1;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
                it.style.animationPlayState = 'paused';
            
        });
          

             }
           else if(point==20){
            l=2;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
    });

           }
           else if(point==30){
               l=3;
               levels.textContent=l;
               plevel.textContent=l;
               popUp.classList.add("pop-up-open");
               fruits.forEach(it=>{
               it.style.animationPlayState = 'paused';
           
       });
           }
           else if(point==200){
               l=4;
               levels.textContent=l;
               plevel.textContent=l;
               popUp.classList.add("pop-up-open");
               fruits.forEach(it=>{
               it.style.animationPlayState = 'paused';
           
           });
           }
           else if(point==250){
            l=5;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
        });
        }
        else if(point==300){
            l=6;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
        });
        }
        else if(point==350){
            l=7;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
        });
        }
        else if(point==400){
            l=8;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
        });
        }
        else if(point==450){
            l=9;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
        });
        }
        else if(point==500){
            l=10;
            levels.textContent=l;
            plevel.textContent=l;
            popUp.classList.add("pop-up-open");
            fruits.forEach(it=>{
            it.style.animationPlayState = 'paused';
        
        });
        }
         
           
            
           
           okbtnE.addEventListener("click", () => {
           
            popUp.classList.remove("pop-up-open");
            fruits.forEach(it=>{it.style.animationPlayState = 'running';});
             });
            
    })
 
  
})




