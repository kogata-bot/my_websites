const h2 = document.querySelector('h2');
const intro1 = document.querySelector('#sub_eggplants');
const intro2 = document.querySelector('#eggplants');
const intro3 = document.querySelector('#greenpapper');
const intro4 = document.querySelector('#sub_roses');



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
labelObserver.observe(intro1);
labelObserver.observe(intro2);
labelObserver.observe(intro3);
labelObserver.observe(intro4);
labelObserver.observe(intro5);
labelObserver.observe(intro6);
labelObserver.observe(intro7);
labelObserver.observe(intro8);
labelObserver.observe(intro9);
labelObserver.observe(intro10);
labelObserver.observe(intro11);
