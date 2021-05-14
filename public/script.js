//managing the toggle of the menu buttons when active
const navbar=document.querySelector('.navbar__icon');
const icons=document.querySelectorAll('.navbar__icon--select');

icons.forEach(icon=>{
	icon.addEventListener('click',function (){
		navbar.querySelector('.active').classList.remove('active');
		icon.classList.add('active');
	})
	
});



//data API i created to fake a server request from the API
const API='https://my-json-server.typicode.com/shinyBoy21/mockjson/db';

// tags that receive data from the db
const selectElement= ()=> {
	const fullName=document.getElementById("fullName");

	const levelOne=document.getElementById("levelOne");
	const levelTwo=document.getElementById("levelTwo");
	const levelThree=document.getElementById("levelThree");

	const levelOneArea=document.getElementById('levelOneArea');
	const levelTwoArea=document.getElementById('levelTwoArea');
	const levelThreeArea=document.getElementById('levelThreeArea');

	const levelOneYear=document.getElementById('levelOneYear');
	const levelTwoYear=document.getElementById('levelTwoYear');
	const levelThreeYear=document.getElementById('levelThreeYear');

	const levelOnePreview=document.getElementById("levelOnePreview");
	const levelTwoPreview=document.getElementById("levelTwoPreview");
	const levelThreePreview=document.getElementById("levelThreePreview");

	const projectOnePreview=document.getElementById("projectOnePreview");
	const projectTwoPreview=document.getElementById("projectTwoPreview");
	const projectThreePreview=document.getElementById("projectThreePreview");

	const projectOneText=document.getElementById("projectOneText");
	const projectTwoText=document.getElementById("projectTwoText");
	const projectThreeText=document.getElementById("projectThreeText");

	const projectOneSite=document.getElementById("projectOneSite");
	const projectTwoSite=document.getElementById("projectTwoSite");
	const projectThreeSite=document.getElementById("projectThreeSite");

	const myEmail=document.getElementById("myEmail");
	const myCity=document.getElementById("myCity");
	const myNumber=document.getElementById("myNumber");
	const myNickname=document.getElementById("myNickname");

}

const appendContent =(text)=> {
	selectElement();//call the selectElement function to import  its data here

	fullName.textContent=(text.user[0].firstName+" "+text.user[0].lastName);

	levelOne.textContent=(text.education[0].level);
	levelOneArea.textContent=(text.education[0].area);
	levelOneYear.textContent=(text.education[0].year);

	levelTwo.textContent=(text.education[1].level);
	levelTwoArea.textContent=(text.education[1].area);
	levelTwoYear.textContent=(text.education[1].year);

	levelThree.textContent=(text.education[2].level);
	levelThreeArea.textContent=(text.education[2].area);
	levelThreeYear.textContent=(text.education[2].year);

	levelOnePreview.setAttribute('src',text.education[0].img);
	levelTwoPreview.setAttribute('src',text.education[1].img);
	levelThreePreview.setAttribute('src',text.education[2].img);


	projectOneText.textContent=(text.projects[0].overview);
	projectTwoText.textContent=(text.projects[1].overview);
	projectThreeText.textContent=(text.projects[2].overview);

	projectOneSite.setAttribute=("href",text.projects[0].site);
	projectTwoSite.setAttribute=("href",text.projects[1].site);
	projectThreeSite.setAttribute=("href",text.projects[2].site);

	projectOneSite.textContent=(text.projects[0].site);
	projectTwoSite.textContent=(text.projects[1].site);
	projectThreeSite.textContent=(text.projects[2].site);

	projectOnePreview.setAttribute('src',text.projects[0].img);
	projectTwoPreview.setAttribute('src',text.projects[1].img);
	projectThreePreview.setAttribute('src',text.projects[2].img);

	myEmail.textContent=(text.user[0].email);
	myCity.textContent=(text.user[0].city);
	myNumber.textContent=(text.user[0].phoneNumber);
	myNickname.textContent=(text.user[0].nickName);

}

const getData=(info)=> {
	appendContent(info);
	console.log(info.user)
}

fetch(API)
.then(response=>response.json())
.then(data=>{
	getData(data)	
});






