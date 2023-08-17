const key=document.querySelector('.search-btn');
let vcity=document.querySelector('.searchbar');

key.addEventListener('click',()=>{
	let n=Math.random()*6+1;
	let m=Math.random()*100+10;
	let h=Math.random()*50+1;
    let k=n.toFixed(2);
	m=Math.floor(m);
	h=Math.floor(h);
	n=Math.floor(n);
    let city=vcity.value;

    let text=`
           <div class="mid">
				<img src="images/${n}.png" class="wimg" />
				<p class="pdeg">${m}°c</p>
				<p class="pcity">${city}</p>
			</div>
			<div class="end">
				<div class="end_contents">
					<div class="img"><img src="images/humidity.png" class="imgtype"></div>
				<div class="content">
					<p class="percent">${h}%</p>
					<p class="ptype">Humidity</p>
				</div>
				</div>
				<div class="end_contents"><div class="img"><img src="images/wind.png" class="imgtype"></div>				<div class="content">
					<p class="percent">${k}km/h</p>
					<p class="ptype">Wind Speed</p>
				</div></div>
			</div>
    `;

    if(city.length<=2)text=`<h1 class="err">Not Found</h1>`;
    setTimeout(() => {
     document.querySelector('.contents').innerHTML=text;
    }, 2000)
})
