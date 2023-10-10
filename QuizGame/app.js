questionbank=[
{
	question:"What is a correct syntax to output 'Hello World' in C++?",
	options:["a","b","c","d"],
	answer:"b"
},
{
	question:"Which is largest in the world ?",
	options:["a","b","c","d"],
	answer:"b"
},
{
	question:"largest animal in the world ?",
	options:["a","b","c","d"],
	answer:"b"
},
{
	question:"Which is  the world ?",
	options:["a","b","c","d"],
	answer:"b"
},
{
	question:"Which is largest animal in the w ?",
	options:["a","b","c","d"],
	answer:"b"
},
]

let element=document.querySelector('.main-container');
let index=0
let score=0;
let pre=0;
function nextquestion(){
	pre=0;
	if(index<questionbank.length){
	let htmls=`<div class="qbox">
				<h1 class="head-name">Quizz!!</h1>
				<hr class="dashline">
				<p class="question">${index+1}. ${questionbank[index].question}</p>
				<div class="answers">
					<button class="option" onclick="checkans(${index},this)">${questionbank[index].options[0]}</button>
					<button class="option" onclick="checkans(${index},this)">${questionbank[index].options[1]}</button>
					<button class="option" onclick="checkans(${index},this)">${questionbank[index].options[2]}</button>
					<button class="option" onclick="checkans(${index},this)">${questionbank[index].options[3]}</button>
					<button class="btn" onclick="nextquestion()">Next</button>
				</div>
			</div>`;
	element.innerHTML=htmls;
	index++;
	}
	else
	{
		let show=`<h1 class="score">Hey Your Score :${score}/${index}</h1> <button class="score" onclick="nextquestion()" >Try Again</button>`
		element.innerHTML=show;
		index=0;
		score=0;
	}	
}
function checkans(index,ans){
		if(pre)
		pre.classList.remove('click');
		ans.classList.add('click');
		pre=ans
	
	if(questionbank[index].answer==ans.innerText)
		score++;
}





