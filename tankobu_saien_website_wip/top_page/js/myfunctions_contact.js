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



	/* 表題を必須入力にする */
	$(function(){
		$('.send').click(function(){
			let check_count = $('.class_subject :checked').length;
			if (check_count == 0){
				alert('エラー:入力項目に不足箇所があります。');
				return false;
			}
		});
	});

	/* 送信内容を確認する */
	function onButtonClick() {
		const subjects = [];
		const target = document.getElementById("id_inquiry");
		for (let i=0;	i < target.subject.length; i++) {
			if (target.subject[i].checked) {
				subjects.push(target.subject[i].value);
			}
		}
		document.getElementById("span_subject").textContent = subjects;
		document.getElementById("span_name").textContent  = target.name.value;
		document.getElementById("span_kana").textContent  = target.kana.value;
		document.getElementById("span_email").textContent  = target.email.value;
		document.getElementById("span_mobile_tel").textContent  = target.mobile_tel.value;
		for (let i=0;	i < target.gender.length; i++) {
			if (target.gender[i].checked) {
				document.getElementById("span_gender").textContent = target.gender[i].value;
			}
		}
		document.getElementById("span_send_date").textContent  = target.send_date.value;
		document.getElementById("span_relationship").textContent  = target.relationship.value;
		document.getElementById("span_message").textContent  = target.message.value;
	}

	/* プルダウンリストを未選択にする */
	function setNonSelect(idname){
		// 未選択状態にする
		var obj = document.getElementById(idname);
		obj.selectedIndex = -1;
	}

	/* 送信するかを確認する */
		function submitWarning(){
			if(window.confirm('フォームを送信しますか？')){
				window.alert('フォームを送信しました');
				return true;
			} else {
				window.alert('フォームの送信をキャンセルしました');
				return false;
			}
		}

	/* リセットするかを確認する */
		function resetWarning(){
			if(window.confirm('記入内容をリセットしますか？')){
				window.alert('記入内容をリセットしました');
				return true;
			} else {
				return false;
			}
		}



// 文字数カウント

const id_message = document.querySelector('#id_message')
const counter = document.querySelector('#counter')

id_message.addEventListener('keyup',()=>{
  counter.textContent = id_message.value.length;



if(id_message.value.length>=100){
	counter.style.color = '#2525b9';
	
}else{
	counter.style.color = '#d23939'; 
	
}

});

// 送信ボタンについて（規約に同意も）
const isAgreed = document.querySelector('#check')
const btn = document.querySelector('#btn')

isAgreed.addEventListener('change',()=>{
  if(isAgreed.checked){
	btn.disabled = false;
	}else{
  btn.disabled = true;
}


});



