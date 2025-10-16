//your JS code here. If required.
let inputs =  document.querySelectorAll(".code");
inputs[0].focus();

inputs.forEach((input,index) =>{
	input.addEventListener("input", (e) =>{
		let value = e.target.value;
		if(value.length > 0 && index < inputs.length-1) {
			inputs[index+1].focus();
		}
	});
	input.addEventListener("keydown",(e) =>{
		 if (e.key === "Backspace") { 
			if(e.target.value === "" &&  index > 0){
				inputs[index-1].focus();
				inputs[index-1].value = "";
				
			} 
			else{
				e.target.value = "";
			}
		} 
	});
});








