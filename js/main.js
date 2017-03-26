function askQuestions() { 


	var firstName= prompt ('What is your first name');

	var lastName=prompt('What is your last name');

	if (firstName.toLowerCase() ==='General') { 
		if (lastName.toLowerCase()!=='Assembly') {
		console.log ('Greetings General!'); 
	} 

	var faveColour=prompt ('What is your favourite colour?').toLowerCase().trim(); 
	if (faveColour==='red'||
		faveColour==='green'||
		faveColour==='blue' ||
		faveColour==='yellow')
	{ 

		$('h1').css('color','faveColour');
	}

	var age = prompt ('How old are you?')
	age=parseInt(age);

	if (age>=18) {
		console.log('User is an adult') ;
	} else if (age>=13) {
		console.log ('User is a teenager')
	} else { 
	console.log("User is a child")}
	}

}

//$ is the name for JQuery 
$(function () {

	$('img').on ('click',askQuestions); 

	//When the user clicks on h3. Waits for user to click on h3 and then the code runs
	$('h3').on ('click',function() {
		//Toggle (Show/Hide) the next element 
		$(this).next().slideToggle(1000);
	});

});  
