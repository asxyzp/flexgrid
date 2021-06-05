// Script for CSSFlex
// Created by Aashish Loknath Panigrahi

//Selecting different HTML elements
let style = document.querySelector(".style");
let editor = document.querySelector(".flexbox-style");
let menu_button = document.querySelector(".menu-button");
let menu_container = document.querySelector(".menu-container");
let eye_button = document.querySelector(".mobile-view-button");
let dark_mode_button = document.querySelector(".dark-mode-button");
let editor_container = document.querySelector(".editor-container");
let flexbox_style = document.querySelector(".flexbox-style");
let flexbox_container = document.querySelector(".flexbox-container");

/*
	Function : removeEntities(str)
	Functionality : Removing any and all &nbsp; entity values from the received string
	Parameter(s) : str (string from which &nbsp; has to be removed)
	Return value : string value from which &nbsp; has been removed
*/
let removeEntities = (str) =>{
	while(true){
		if(str.indexOf("&nbsp;")!=-1){
			let start = str.indexOf("&nbsp;");
			let end = start+"&nbsp;".length;
			str = str.substr(0,start)+str.substr(end);		
		}
		else{
			break;
		}
	}
	return str;
};


/*
	Function : removeTags(str)
	Functionality : Removing any and all tags from the received string
	Parameter(s) : str (string from which the tags have to be removed)
	Return value : string value from which the tags has been removed
*/
let removeTags = (str) =>{
	while(true){
		if(str.indexOf("<")!=-1){
			let start = str.indexOf("<");
			let end = str.indexOf(">",start)+1;
			str = str.substr(0,start)+str.substr(end);		
		}
		else{
			break;
		}
	}
	return str;
};
removeTags(editor.innerHTML);


//Reflecting the changes from the editor into CSS Flexbox
editor.addEventListener("input",()=>{
	// Values which must be inserted inside style tag must be filtered w/ entities and  tags
	style.innerText = removeTags(removeEntities(editor.innerHTML));
});

//Clicking on menu button will toggle the menu container 
let menu_toggle_counter = 0;							
menu_button.addEventListener("click",()=>{
	if(menu_toggle_counter%2==0){
		menu_container.classList.add("flex");
		menu_container.classList.remove("hide");
		menu_toggle_counter++;
	}
	else{
		menu_container.classList.add("hide");
		menu_container.classList.remove("flex");
		menu_toggle_counter++;
	}
	
});

//Clicking on eye button will toggle between different views 
let mobile_view_toggle_counter = 0;							
eye_button.addEventListener("click",()=>{
	if(mobile_view_toggle_counter%2==0){
		editor_container.style.display="none";
		flexbox_container.style.display="block";
		mobile_view_toggle_counter++;
	}
	else{
		editor_container.style.display="block";
		flexbox_container.style.display="none";
		mobile_view_toggle_counter++;
	}
});

//Clicking on eye button will toggle between different modes (dark & light) 
let dark_mode_toggle_counter = 0;							
dark_mode_button.addEventListener("click",()=>{
	if(dark_mode_toggle_counter%2==0){
		document.querySelector("body").style.setProperty("background", "#141d26");
		document.querySelector("body").style.setProperty("color", "white");
		document.querySelector(":root").style.setProperty("--black","white");
		document.querySelector(":root").style.setProperty("--white","black");
		document.querySelector(".flexbox-style").style.setProperty("background","#243447");
		document.querySelector(".flexbox-style").style.setProperty("color","white");
		document.querySelector(".container").style.setProperty("background","#243447");
		document.querySelectorAll(".box").forEach((element)=>{
			element.classList.add("dark");
		});
		dark_mode_toggle_counter++;
	}
	else{
		document.querySelector("body").style.setProperty("background", "white");
		document.querySelector("body").style.setProperty("color", "black");
		document.querySelector(":root").style.setProperty("--black","black");
		document.querySelector(":root").style.setProperty("--white","white");
		document.querySelector(".flexbox-style").style.setProperty("background","black");
		document.querySelector(".flexbox-style").style.setProperty("color","white");
		document.querySelector(".container").style.setProperty("background","lightgray");
		document.querySelectorAll(".box").forEach((element)=>{
			element.classList.remove("dark");
		});
		dark_mode_toggle_counter++;
	}
});


//When the window size increases or decreases then flexbox container should be visible
window.addEventListener('resize',()=>{
	if(window.innerWidth>920){
		editor_container.style.display="block";
		flexbox_container.style.display="block";
	}
	else{
		if(mobile_view_toggle_counter%2==0){
			editor_container.style.display="block";
			flexbox_container.style.display="none";
		}
		else{
			editor_container.style.display="none";
			flexbox_container.style.display="block";
		}
	}
});

// Adding CSS tooptips using tippy.js
// The tooltip must be used after the document is loaded 
tippy('.box1',{content: `Class : .box1`});
tippy('.box2',{content: `Class : .box2`});
tippy('.box3',{content: `Class : .box3`});
tippy('.box4',{content: `Class : .box4`});
tippy('.box5',{content: `Class : .box5`});
tippy('.box6',{content: `Class : .box6`});

//Clicking on social icons
document.querySelector(".fa-twitter-square").addEventListener("click",()=>{window.location.href="https://twitter.com/asxyzp";});
document.querySelector(".fa-instagram-square").addEventListener("click",()=>{window.location.href="https://instagram.com/asxyzp";});
document.querySelector(".fa-blog").addEventListener("click",()=>{window.location.href="https://asxyzp.code.blog";});
