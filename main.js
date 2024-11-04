

let arr1=[
         
		 {
			 number:1,
			 Color:"green"
		 },
		 {
			 number:2,
			 Color:"yellow"
		 },
		 {
			 number:3,
			 Color:"blue"
		 },
		 {
			 number:4,
			 Color:"orange"
		 },
		 {
			 number:5,
			 Color:"red"
		 },
		 {
			 number:6,
			 Color:"pink"
		 }
		 
        ]

let heading=document.getElementById("number");

let container=document.getElementById("container");

function show()
{

	container.classList.add("rotate");
	heading.innerHTML="R";
	setTimeout(function (){
		 heading.classList.remove("rotate");
		let randNum=Math.floor(Math.random()*arr1.length);
	
	      heading.innerHTML=arr1[randNum].number;

         container.style.backgroundColor = arr1[randNum].Color;
		 container.classList.remove("rotate");
		 
	},1000);
	
}



