const   Links = document.querySelectorAll('.alternate-style'),
        totalLinks = Links.length;


    
function setActiveStyle (color) {

    for (let i = 0; i < totalLinks; i++) {
        if(color === Links[i].getAttribute("title")){
            Links[i].removeAttribute("disabled");
        }else{
            Links[i].setAttribute("disabled","true");
        }
        
        
    }
}


// Body skin
const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin = bodySkin.length;
      
      for (let i = 0; i < totalBodySkin; i++) {
          bodySkin[i].addEventListener("change", function() {
              if(this.value === "dark"){
                  document.body.classList.add("dark");
              }else{
                  document.body.classList.remove("dark");
              }
          })
          
      }


document.querySelector('.toggle-style-switcher').addEventListener("click", ()=> {
    document.querySelector('.style-switcher').classList.toggle("open");
}); 

