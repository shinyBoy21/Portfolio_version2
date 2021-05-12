
//changing clor of navbar elements

const navbar=document.querySelector('.navbar__icon');
const icons=document.querySelectorAll('.navbar__icon--select');

icons.forEach(icon=>{
	icon.addEventListener('click',function (){
		navbar.querySelector('.active').classList.remove('active');
		icon.classList.add('active');
	})
	
})

