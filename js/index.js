// Custom JS here

let twist = document.querySelector(".logo");

twist.addEventListener('click', event => {
    gsap.to(".logo, .menu",{
        duration: 5,
        rotation: 720        
      }); 
  });


  let messVisible = document.querySelector(".messType");

  messVisible.addEventListener('keydown', event => {
    console.log('is it workin');
    gsap.to(".messBut",{
        duration: 5,
        opacity: 1        
      }); 
  });

