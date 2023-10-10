let text = document.querySelector('.text-box');
let addtask = document.querySelector('.add-btn');
let show=document.querySelector('.down');



let todo=[]

function addtodo(){
	let html="";
	todo.forEach((x,index)=>{
		html+=`<div class="main-tasks">
					<p class="tasks"><img class="det-img" alt="check" onclick="change(this)" src="images/uncheck.png">${x}</p>
				<button class="delete-btn" onclick="deletetask(${index})">x</button></div>`
	})
	show.innerHTML=html;
}

function change(check){
	if(check.src.endsWith('uncheck.png'))
	{
		check.src='images/check.png';
	}
	else
	{
		check.src='images/uncheck.png';
	}
}

function deletetask(index){
	todo.splice(index,1);
	addtodo();
}

addtask.addEventListener('click',function(){
		todo.push(text.value)
		addtodo()
		text.value='';
})

