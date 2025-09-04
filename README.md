# Snake Game

This project is a simple Snake Game built with JavaScript and rendered on an HTML <canvas>.
The player controls a snake using the arrow keys (↑, ↓, ←, →) to collect food and grow longer.

## Features

Smooth snake movement with keyboard controls.

Randomly generated food positions.

Snake grows longer each time it eats food.

Collision detection with the snake’s body (game over).

Screen wrapping: if the snake moves beyond one edge, it reappears on the opposite side.

## How it works

The snake is drawn on a grid where each cell is a fixed-size box.

The game loop updates every 130ms to redraw the snake, food, and handle collisions.

When the snake eats food, a new piece of food spawns at a random location.

You can customize the box size, game speed, or add new features like scoring, levels, or special effects.