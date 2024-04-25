const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');


const showLabel = (entries) =>{

    const keyframes = {
        opacity: [0, 1],
        translate: ['100px',0]
    };

    const options = {
  
        duration: 2000,
        easing: 'ease'
    };

    for(let i =0;i<entries.length;i++){
        entries[i].target.animate(keyframes, options);
    }
    
    
    

}



const labelObserver = new IntersectionObserver(showLabel);

labelObserver.observe(h2);
labelObserver.observe(h3);
labelObserver.observe(h4);




  const h1 = document.querySelector('h1');
  
  const keyframes = {
    borderRadius: [
      '20% 50% 50% 70%/50% 50% 70% 50%',
      '50% 20% 50% 50%/40% 40% 60% 60%',
      '50% 40% 20% 40%/40% 50% 50% 80%',
      '50% 50% 50% 20%/40% 40% 60% 60%',
    ],
  };
  
  const options = {
    duration: 2000,
    direction: 'alternate',
    iterations: Infinity,
  };
  
  h1.animate(keyframes, options);
