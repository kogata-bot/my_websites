const h2 = document.querySelector('h2');
const h3_1 = document.querySelector('#gallery');
const h3_2 = document.querySelector('#place');
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
labelObserver.observe(h3_1);
labelObserver.observe(h3_2);
labelObserver.observe(h4);



const loading =document.querySelector('#loading');



window.addEventListener('load',()=>{

    //スピナーぐるぐる
    loading.classList.add('loaded');
    
    
});


