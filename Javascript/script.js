			var start = new Date().getTime();
			
			function randomColor() {
				var letters = "0123456789ABCDEF";
				var color = "#";
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				return (color);
			}
			
			function squareOrCircle() {
				var choices = ["0%", "50%"];
				var selected = choices[Math.floor(Math.random() * 3)];
				return (selected);
			}
			
			function randomNumber(min, max) {
				return (Math.random() * (max - min) + min);
			}
			
			function instantiateShape() {
				var end = new Date().getTime();
				
				var timeTaken = ((end - start) / 1000).toFixed(2);
				document.getElementById("time_box").innerHTML = "Your time: " + timeTaken + "s";
				
				document.getElementById("target").style.backgroundColor = randomColor();
				
				var widthHeight = randomNumber(100, 300);
				divWidth = document.getElementById("circleSquareHolder").offsetWidth;
				divHeight = document.getElementById("circleSquareHolder").offsetHeight;
				
				document.getElementById("target").style.width = widthHeight;
				document.getElementById("target").style.height = widthHeight;
				document.getElementById("target").style.position = "relative";
				document.getElementById("target").style.top = randomNumber(0, (divHeight - widthHeight));
				document.getElementById("target").style.left = randomNumber(0, (divWidth - widthHeight));
				
				document.getElementById("target").style.borderRadius = squareOrCircle();
				
				start = new Date().getTime();

			}
			
			instantiateShape();
			
			document.getElementById("target").onclick = instantiateShape;