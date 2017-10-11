export default class Terrain {
	constructor (width, height) {
		this.screenWidth = width;
		this.screenHeight = height;
		var x  = 0;
		var y = Math.random(0 * height / 2 + height / 2 - 10);
		this.path = [{x: x, y: y}];

		while (x < width) {
			//Set y to a new randomized clamped valud
			y = this.clampHeight(y);
			//Push endpoint
			this.path.push({x: x, y: y});
			//Move x by a random sitance
			x = x + Math.random() * 15;
		}
	}

	clampHeight = (y) => {
		do {
			var newHeight = y;
			//Calculate a random height
			var probability = Math.random();
			if (probability < 0.30) { //10% chance
			newHeight -= Math.random() * 50;
			} else if (probability < 0.60) {
			newHeight += Math.random() * 50;
			}
		} while (newHeight < this.screenHeight / 2 || newHeight > this.screenHeight - 10);
		return newHeight;
	};

	render = (ctx) => {
		ctx.strokeStyle = 'black';
    ctx.moveTo(this.path[0].x, this.path[0].y);
		for (path of this.path) {
			ctx.lineTo(path.x, path.y);
		}
		ctx.stroke();
	}
}
