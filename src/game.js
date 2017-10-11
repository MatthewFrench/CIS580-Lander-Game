// game.js

import Terrain from './terrain.js';
import Ship from './ship.js';

/** @class Game
  */
export default class Game {
  constructor() {
    // Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 100;
    this.backBufferCanvas.height = 100;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');
    // Create the screen buffer canvas
    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 100;
    this.screenBufferCanvas.height = 100;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
    // Bind class functions
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    // Set up event handlers
    window.onkeydown = this.handleKeyDown;
    // Start the game loop
    this.interval = setInterval(this.loop, 500);

    this.terrain = new Terrain(300, 300);
    this.ship = new Ship(300, 300);
  }
  /** @method handleKeyDown
    * register when a key is pressed and change
    * our input object.
    */
  handleKeyDown(event) {
    event.preventDefault();
    console.log(event.key);
    switch(event.key){
      case 'w':
      case 'ArrowUp':

        break;
      case 'a':
      case 'ArrowLeft':
        break;
      case 's':
      case 'ArrowDown':
        break;
      case 'd':
      case 'ArrowRight':
        break;
    }
  }
  /** @method update
    * Updates the game world.
    */
  update() {
  }
  /** @method render
    * Renders the game world
    */
  render() {
    this.backBufferContext.fillStyle = '#ccc';
    this.backBufferContext.fillRect(0, 0, 100, 100);

    //Render stuff to back buffer
    this.terrain.render(this.backBufferContext);

    this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
  }
  loop() {
    this.update();
    this.render();
  }
}
