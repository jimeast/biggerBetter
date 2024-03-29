window.addEventListener('load', function () {
	var src = document.getElementById("images").getElementsByTagName("img"),
	img = function img (el,x,y) {
		var d = document.createElement("div");
		d.className     = "frame";
		d.style.left    = 50 * x + "%";
		d.style.top     = 50 * y + "%";
		var img         = document.createElement("img");
		img.className   = "img";
		img.src         = src[Math.floor(Math.random()*src.length)].src;
		img.onmousedown = function () {
			display(this.parentNode);
			this.parentNode.removeChild(this);
		}
		d.appendChild(img);
		el.appendChild(d);
	},
	display = function(el) {
		img(el,0,0);
		img(el,1,0);
		img(el,0,1);
		img(el,1,1);
	};
	display(document.getElementById("screen"));
  });