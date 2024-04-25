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