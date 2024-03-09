


function toggleMenu(){
    let profile= document.getElementById("profileMenu")
    profile.classList.toggle("open-menu")
}
function change(){
    console.log("huh")
    var root =  document.querySelector(":root")
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    darkColorLightness="85%"
    whiteColorLightness="20%"
    lightColorLightness="15%"
   
    
    const changeBg =()=>{
      root.style.setProperty('--light-color-lightness',lightColorLightness)
      root.style.setProperty('--white-color-lightness',whiteColorLightness)
      root.style.setProperty('--dark-color-lightness',darkColorLightness)
    }
    
    
      
      changeBg()
    
    }


