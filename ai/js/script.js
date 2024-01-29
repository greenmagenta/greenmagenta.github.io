/*
window.onload = function() {
	const values = ["25", "10", "5", "-25", "-10", "-5"]
	var title_parts = document.getElementsByClassName("rotate");
	for (let i = 0; i < title_parts.length; i++) {
		var value = values[Math.floor(Math.random() * values.length)];
		title_parts[i].style.transform = "rotate("+value+"deg)";
	};
};*/

/*
// create canvas element and append it to document body
let canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// some hotfixes... ( ≖_≖)

// get canvas 2D context and set him correct size
let ctx = canvas.getContext('2d');
resize();

// last known position
let pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
	pos.x = e.clientX;
	pos.y = e.clientY;
}

// resize canvas
function resize() {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

function draw(e) {
	// mouse left button must be pressed
	if (e.buttons !== 1) return;

	ctx.beginPath(); // begin

	ctx.lineWidth = 150;
	ctx.lineCap = 'rectangle';
	ctx.strokeStyle = '#ff4500';

	ctx.moveTo(pos.x, pos.y); // from
	setPosition(e);
	ctx.lineTo(pos.x, pos.y); // to

	ctx.stroke(); // draw it!
}*/


/*
deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("text2img", {
		    text: "YOUR_TEXT_HERE",
    });
    console.log(resp);
})()*/
// toyote7114@zoeyy.com


document.addEventListener('DOMContentLoaded', function () {
	new Zooming({
		// options...
	}).listen('img.zoom')
})



var tester_introduction = document.getElementById('introduction');
var tester_conclusion = document.getElementById('conclusion');
var tester_bibliographie = document.getElementById('bibliographie');
var tester_conclusion = document.getElementById('conclusion');
var tester_annexes = document.getElementById('annexes');
var tester_1_a = document.getElementById('1-A');
var tester_1_b = document.getElementById('1-B');
var tester_2_a = document.getElementById('2-A');
var tester_2_b = document.getElementById('2-B');

var title_introduction = document.getElementById("title-introduction")
var title_1_a = document.getElementById("title-1-a")
var title_1_b = document.getElementById("title-1-b")
var title_2_a = document.getElementById("title-2-a")
var title_2_b = document.getElementById("title-2-b")

var bar_wrapper = document.getElementsByClassName("content")[1]

var wrapper = document.body;
window.onscroll = function() {
	var m_introduction = document.getElementById("resume-introduction");
	var m_conclusion = document.getElementById("resume-conclusion");
	var m_bibliographie = document.getElementById("resume-bibliographie");
	var m_annexes = document.getElementById("resume-annexes");
	var m_1 = document.getElementById("resume-1");
	var m_2 = document.getElementById("resume-2");
	var m_1_a = document.getElementById("resume-1-a");
	var m_1_b = document.getElementById("resume-1-b");
	var m_2_a = document.getElementById("resume-2-a");
	var m_2_b = document.getElementById("resume-2-b");

	var m_introduction_cp = document.getElementById("resume-introduction-cp");
	var m_conclusion_cp = document.getElementById("resume-conclusion-cp");
	var m_bibliographie_cp = document.getElementById("resume-bibliographie-cp");
	var m_annexes_cp = document.getElementById("resume-annexes-cp");
	/*var m_1_cp = document.getElementById("resume-1-cp");*/
	/*var m_2_cp = document.getElementById("resume-2-cp");*/
	var m_1_a_cp = document.getElementById("resume-1-a-cp");
	var m_1_b_cp = document.getElementById("resume-1-b-cp");
	var m_2_a_cp = document.getElementById("resume-2-a-cp");
	var m_2_b_cp = document.getElementById("resume-2-b-cp");

	/* normal */
	if(checkVisible(tester_1_a) || checkVisible(tester_1_b)){
		m_1.style.color = "#522a22";
	} else {
		m_1.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_2_a) || checkVisible(tester_2_b)){
		m_2.style.color = "#522a22";
	} else {
		m_2.style.color = "rgba(82, 42, 34, 0.5)";
	}

	if(checkVisible(tester_introduction)){
		m_introduction.style.color = "#522a22";
	} else {
		m_introduction.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_1_a)){
		m_1_a.style.color = "#522a22";
		m_introduction.style.color = "rgba(82, 42, 34, 0.5)";
		m_1_b.style.color = "rgba(82, 42, 34, 0.5)";
		m_2.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_1_a.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_1_b)){
		m_1_b.style.color = "#522a22";
		m_1_a.style.color = "rgba(82, 42, 34, 0.5)";
		m_2_a.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_1_b.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_2_a)){
		m_2_a.style.color = "#522a22";
		m_1_b.style.color = "rgba(82, 42, 34, 0.5)";
		m_2_b.style.color = "rgba(82, 42, 34, 0.5)";
		m_1.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_2_a.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_2_b)){
		m_2_b.style.color = "#522a22";
		m_2_a.style.color = "rgba(82, 42, 34, 0.5)";
		m_conclusion.style.color = "rgba(82, 42, 34, 0.5)";
		m_1.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_2_b.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_conclusion)){
		m_conclusion.style.color = "#522a22";
		m_2_b.style.color = "rgba(82, 42, 34, 0.5)";
		m_bibliographie.style.color = "rgba(82, 42, 34, 0.5)";
		m_2.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_conclusion.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_bibliographie)){
		m_bibliographie.style.color = "#522a22";
		m_conclusion.style.color = "rgba(82, 42, 34, 0.5)";
		m_annexes.style.color = "rgba(82, 42, 34, 0.5)";
		m_2.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_bibliographie.style.color = "rgba(82, 42, 34, 0.5)";
	}
	if(checkVisible(tester_annexes)){
		m_annexes.style.color = "#522a22";
		m_bibliographie.style.color = "rgba(82, 42, 34, 0.5)";
		m_2.style.color = "rgba(82, 42, 34, 0.5)";
	} else {
		m_annexes.style.color = "rgba(82, 42, 34, 0.5)";
	}

	/* chips */
	/*
	if(checkVisible(tester_1_a) || checkVisible(tester_1_b)){
		m_1_cp.style.cssText  = "color: white; background-color: #522a22";
	} else {
		m_1_cp.style.cssText  = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_2_a) || checkVisible(tester_2_b)){
		m_2_cp.style.cssText = "color: white; background-color: #522a22";
	} else {
		m_2_cp.style.cssText = "color: #522a22; background-color: none";
	}*/

	if(checkVisible(tester_introduction)){
		m_introduction_cp.style.cssText = "color: white; background-color: #522a22";
		bar_wrapper.scrollTo({
			left: 0,
			behavior: 'smooth',
		});
	} else {
		m_introduction_cp.style.cssText = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_1_a)){
		m_1_a_cp.style.cssText = "color: white; background-color: #522a22";
		m_introduction_cp.style.cssText = "color: #522a22; background-color: none";
		m_1_b_cp.style.cssText = "color: #522a22; background-color: none";
		/*m_2_cp.style.cssText = "color: #522a22; background-color: none";*/
		bar_wrapper.scrollTo({
			left: 140,
			behavior: 'smooth',
		});

	} else {
		m_1_a_cp.style.cssText = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_1_b)){
		m_1_b_cp.style.cssText = "color: white; background-color: #522a22";
		m_1_a_cp.style.cssText = "color: #522a22; background-color: none";
		m_2_a_cp.style.cssText = "color: #522a22; background-color: none";
		bar_wrapper.scrollTo({
			left: 520,
			behavior: 'smooth',
		});
	} else {
		m_1_b_cp.style.cssText = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_2_a)){
		m_2_a_cp.style.cssText = "color: white; background-color: #522a22";
		m_1_b_cp.style.cssText = "color: #522a22; background-color: none";
		m_2_b_cp.style.cssText = "color: #522a22; background-color: none";
		/*m_1_cp.style.cssText = "color: #522a22; background-color: none";*/
		bar_wrapper.scrollTo({
			left: 905,
			behavior: 'smooth',
		});
	} else {
		m_2_a_cp.style.cssText = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_2_b)){
		m_2_b_cp.style.cssText = "color: white; background-color: #522a22";
		m_2_a_cp.style.cssText = "color: #522a22; background-color: none";
		m_conclusion_cp.style.cssText = "color: #522a22; background-color: none";
		/*m_1_cp.style.cssText = "color: #522a22; background-color: none";*/
		bar_wrapper.scrollTo({
			left: 1260,
			behavior: 'smooth',
		});
	} else {
		m_2_b_cp.style.cssText = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_conclusion)){
		m_conclusion_cp.style.cssText = "color: white; background-color: #522a22";
		m_2_b_cp.style.cssText = "color: #522a22; background-color: none";
		m_bibliographie_cp.style.cssText = "color: #522a22; background-color: none";
		/*m_2_cp.style.cssText = "color: #522a22; background-color: none";*/
		bar_wrapper.scrollTo({
			left: 1820,
			behavior: 'smooth',
		});
	} else {
		m_conclusion_cp.style.color = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_bibliographie)){
		m_bibliographie_cp.style.cssText = "color: white; background-color: #522a22";
		m_conclusion_cp.style.cssText = "color: #522a22; background-color: none";
		m_annexes_cp.style.cssText = "color: #522a22; background-color: none";
		/*m_2_cp.style.cssText = "color: #522a22; background-color: none";*/
		bar_wrapper.scrollTo({
			left: 1950,
			behavior: 'smooth',
		});
	} else {
		m_bibliographie_cp.style.cssText = "color: #522a22; background-color: none";
	}
	if(checkVisible(tester_annexes)){
		m_annexes_cp.style.cssText = "color: white; background-color: #522a22";
		m_bibliographie_cp.style.cssText = "color: #522a22; background-color: none";
		/*m_2_cp.style.cssText = "color: #522a22; background-color: none";*/
		bar_wrapper.scrollTo({
			left: 2100,
			behavior: 'smooth',
		});
	} else {
		m_annexes_cp.style.cssText = "color: #522a22; background-color: none";
	}
};

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= -5);
}

/*
function jump(h){
    var top = document.getElementById(h).offsetTop; //Getting Y of target element
    window.scrollTo(0, top);						//Go there directly or some transition
}*/

function jump(h){
    var url = location.href;		       //Save down the URL without hash.
    location.href = "#"+h;				 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}
/*
$(window).on('scroll', function() {
	if ($(window).scrollTop() >= $('#introduction').offset().top + $('#introduction').outerHeight() - window.innerHeight) {
		if(checkVisible(tester_introduction)){
			jump("1-A");
		}
	}
});
*/

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	var elements = document.querySelectorAll('.color');
	for(var i=0; i<elements.length; i++){
		elements[i].style.filter = "none";
	}
	var elements = document.querySelectorAll('.resume .content');
	for(var i=0; i<elements.length; i++){
		elements[i].style.backgroundColor = "#ffffff"/*"#fff5e9"*/;
	}
}

/*
function rollRight(id){
	$('.resume-reduced .content').animate({
		scrollLeft: - $('#'+id).width()*1.65
	}, 500);
}
function rollLeft(id){
	$('.resume-reduced .content').animate({
		scrollLeft: $('#'+id).width()*1.65
	}, 500);
}*/
/*
$('.resume-reduced .content')[0].scrollLeft = $('#resume-introduction-cp').width()
*/

/*
var lastScrollTop = 0;
$(window).scroll(function(event){
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		rollLeft("resume-introduction-cp")
	} else {
		rollRight("resume-introduction-cp")
	}
	lastScrollTop = st;
});*/

/*
$(document).ready(function (){
    $('#resume-introduction-cp').click(function (event) {
		horizontalNavigation(0, event);
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-1-a-cp').click(function (event) {
		horizontalNavigation(140, event); //550
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-1-b-cp').click(function (event) {
		horizontalNavigation(520, event); //910
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-2-a-cp').click(function (event) {
		horizontalNavigation(905, event);
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-2-b-cp').click(function (event) {
		horizontalNavigation(1260, event);
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-conclusion-cp').click(function (event) {
		horizontalNavigation(1820, event);
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-bibliographie-cp').click(function (event) {
		horizontalNavigation(1950, event);
		var href = $(this).attr('href');
		window.location.href = href;
	});
	$('#resume-annexes-cp').click(function (event) {
		horizontalNavigation(2100, event);
		var href = $(this).attr('href');
		window.location.href = href;
	});
});*/


/*
function horizontalNavigation(position, event) {
    $('.resume-reduced .content').animate({scrollLeft: position}, 800);
    event.preventDefault();
	return true;
}*/

/*
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});*/

if(typeof window.chrome == "object"){
	$(document).ready(function (){
	
		$('#resume-introduction-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-1-a-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-1-b-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-2-a-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-2-b-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-conclusion-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-bibliographie-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
		$('#resume-annexes-cp').click(function (event) {
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 2000);
		});
	
	});
}

/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});*/