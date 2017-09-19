window.onload = function(){
	function byId(id) {
		return typeof(id) === "string"?document.getElementById(id):id;
	}
	// 封装一个document.getElementById(id)的函数
	var index = 0,
		timer = null,
		pics = byId("banner").getElementsByTagName('div'),
		len = pics.length,
		dots = byId("dots").getElementsByTagName('span'),
		prev = byId("prev"),
		next = byId("next");
	function slideImg() {
		var main = byId("main");
		main.onmouseover = function(){
			if (timer) {
				clearInterval(timer);
			}
		}
		main.onmouseout = function(){
			timer = setInterval(function(){
				index++;
				if (index >= len) {
					index = 0;
				}
				changeImg();
			},3000);
		}
		main.onmouseout();
		// 自动在main上触发鼠标离开事件
		for (var d = 0; d < len; d++) {
			// 遍历所有点击，且绑定点击事件，点击远点切换图片
			dots[d].id = d;
			// 给所有span添加一个id的属性，值为d，作为当前span的索引
			dots[d].onclick = function(){
				index = this.id;
				this.className = "active"
				changeImg();
			}
		}
		prev.onclick = function(){
			index--;
			if (index < 0) {
				index = len-1;
			}
			changeImg();
		}
		next.onclick =function(){
			index++;
			if (index >= len) {
				index = 0;
			}
			changeImg();
		}
	}
	function changeImg(){
		for (var i = 0; i < len; i++) {
			pics[i].style.display = "none";
			dots[i].className = "";
		}
		pics[index].style.display = "block";
		dots[index].className = "active";
	}
	slideImg();
}

