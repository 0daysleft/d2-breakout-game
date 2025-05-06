# 🎮 2D Breakout Game

A classic 2D Breakout game built with HTML, CSS, and JavaScript. The game features a bouncing ball that interacts with blocks in the upper area of the screen. Players need to control a paddle at the bottom to bounce the ball and hit the blocks, earning points. The goal is to prevent the ball from touching the ground while breaking all the blocks! 🏆

## Game Features ✨

- **Bouncing Ball**: The ball bounces off the walls, blocks, and the paddle. 🏀
- **Paddle**: A movable block at the bottom of the screen that the player controls to bounce the ball back into the game area. ⬛
- **Blocks**: Multiple blocks are positioned at the top of the screen, and when the ball hits them, the block disappears, and the player earns a point. 💥
- **Game Progress**: The game keeps track of the current score and level. 📊
- **Losing Condition**: The game ends if the ball touches the ground. ⚠️

## How to Play 🕹️

1. Use the left and right arrow keys (or mouse) to move the paddle. ⬅️➡️
2. Try to keep the ball in the air by bouncing it off the paddle. 🙌
3. Hit all the blocks to earn points. 💎
4. Don't let the ball fall off the screen, or you will lose! ⚡

## Installation 🔧

To play the game, you can clone this repository or download the files and open `index.html` in your browser. 🌐

### Steps to run the game:

1. Clone or download the repository.

- [git clone](https://github.com/0daysleft/2d-breakout-game.git) 🖥️

2. Open the `index.html` file in any modern browser (e.g., Chrome, Firefox). 🌍

## Technologies Used 🛠️

- **HTML**: Structure of the game. 🏗️
- **CSS**: Styling the game layout, blocks, paddle, and ball. 🎨
- **JavaScript**: Game logic, animation, and event handling. 💻

## File Structure 📂

```
2d-breakout-game/
│
├── index.html # Main HTML file
├── style.css # Styles for the game
└── script.js # JavaScript game logic
```

---

## Game Logic 🧠

- **Ball Mechanics**: The ball's movement is controlled by velocity vectors, and it bounces off walls and blocks with a slight change in direction. 🏀
- **Collision Detection**: The game detects collisions between the ball and blocks, as well as the ball and the paddle. When the ball hits a block, that block is removed, and the score is updated. 🔍
- **Paddle Movement**: The paddle moves horizontally in response to player input via the arrow keys or mouse movement. 🎮
- **Score Tracking**: Each block hit adds one point to the player's score, and the game level progresses as the player clears all blocks. 🏆

---

## Future Improvements 🚀

- Add multiple levels with increasing difficulty. 🔝
- Add power-ups (e.g., multi-ball, larger paddle). ✨
- Implement a better scoring system (e.g., time-based bonus points). ⏱️
- Add a restart option when the game ends. 🔁

---

## Thanks 🙏

- Ania Kubow [GitHub Page](https://github.com/kubowania) and [YouTube Tutorials](https://www.youtube.com/c/AniaKub%C3%B3w) 🎥

---

## License 📜

This project is open source and available. 🌍

---

Enjoy playing the game and have fun breaking those blocks! 🎉

