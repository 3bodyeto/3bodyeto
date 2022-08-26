let f = function(){
	try{
		document.querySelector("#app-main > div > div > div > div > div.card-dashboard.card > div.card-question-inner > div > button:nth-child(1)").click();
	}
	catch(err){
		//pass
	}
	try{
		document.querySelector("#app-main > div > div > div > div > div.card-dashboard.card > div.card-stats-outer.is-submitted > div > div.button-group.align-center > button").click();
	}
	catch(err){
		//pass
	}
}
setInterval(f, 0);
