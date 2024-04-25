const menu = document.querySelector('#menu');

const lists =[
    {name:'サンチュ',img:'IMG_4428.jpg',subject:'キク科'},
    {name:'玉ねぎ',img:'IMG_4429.jpg',subject:'ヒガンバナ科'},
    {name:'いちご',img:'IMG_4430.jpg',subject:'バラ科'},
    {name:'きゅうり',img:'IMG_4431.jpg',subject:'ウリ科'},
    {name:'まくわ瓜',img:'IMG_4432.jpg',subject:'ウリ科'},
    {name:'トウモロコシ',img:'IMG_4433.jpg',subject:'イネ科'},
    {name:'カブ',img:'IMG_4434.jpg',subject:'アブラナ科'},
    {name:'ニラ',img:'IMG_4435.jpg',subject:'ヒガンバナ科'},
    {name:'スイカ',img:'IMG_4437.jpg',subject:'ウリ科'}
   

];



for(let i =0;i<lists.length;i++){

    const {name,img,subject} = lists[i];
    // const name = lists[i].name
    // const img = lists[i].img
    // const subject = lists[i].subject
    const content =`<div><img src = "images/${img}" alt="野菜"><h4>${name}</h4><p>${subject}</p></div>`;

    menu.insertAdjacentHTML('beforeend',content);

    
        
    
    };

    const keyframes_items = {
        opacity:[0,1],
        
        
    
    
    };
    
    const options_items ={
        duration:600,
        fill:'forwards',
        

    
    };
    
    menu.animate(keyframes_items,options_items);
    
   
    










const h2 = document.querySelector("h2");
const keyframes ={
    opacity:[0,1],
    translate:['0 30px',0]

};

const options ={
    delay:0,
    duration : 1500, //ms
   
    easing : 'ease',
   

};


h2.animate(keyframes,options);


//見出しの色が変化
const h1 = document.querySelector("h1");

const keyframesh1 ={
    background:['#f66','#fc2','#f0n','#097']

};

const optionsh1 ={
    
    duration : 8000,
    direction:'alternate',iterations:Infinity, 

   

};


h1.animate(keyframesh1,optionsh1);















