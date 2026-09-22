# Schulte Table

Single-page web application for attention and concentration training.

## What It Does

Displays a 5×5 Schulte table with numbers from 1 to 25 in random order. The task is to click the numbers in ascending order as fast as possible. A timer at the bottom measures completion time.

The interface is deliberately minimal. Black numbers on a white table. No distracting elements.

## How to Use

1. Click the start button.
2. The table appears with numbers in random order.
3. Click numbers from 1 to 25 in order.
4. The timer shows elapsed time.

## Features

- Responsive layout. Works on desktop and mobile.
- No installation, no registration.
- Runs directly in the browser.
- Timer starts on first click.

## Stack

- HTML
- CSS
- JavaScript

No frameworks. No backend. The entire application is client-side.

## Running Locally

Open `index.html` in a browser. No build step required.

## Live Demo

https://x14.github.io/shulte-table/

## Notes

The number placement uses a Fisher-Yates shuffle. Each generation produces a new random order. The timer measures from the first click to the last correct number, not from page load.

## License

MIT. See LICENSE file.

## Contact

Email: martinrlab@gmail.com
I try to respond quickly.
