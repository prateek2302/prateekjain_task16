# JavaScript Map & Filter Exercise - Task 16

## Overview
A web page that renders student records dynamically into responsive cards using JavaScript's `.map()` method and provides a real-time search filter implemented with `.filter()`.

## Features
- **Array of Student Objects**: Contains properties `name`, `marks`, `class`, and `address`.
- **Dynamic Rendering**: Generates card elements dynamically utilizing `Array.prototype.map()`.
- **Real-Time Filtering**: Uses `Array.prototype.filter()` to filter student records by name on keystrokes.
- **Search Feedback**: Updates search title dynamically based on the current user query.

## Files
- `index.html`: Web page layout and input elements.
- `style.css`: Clean card grid styling matching the design specifications.
- `script.js`: Student data, map rendering, and filter search logic.
- `Readme.md`: Documentation.

## How to Run
1. Open `index.html` in any web browser.
2. Type any student name (e.g., "Ra", "Ramesh", "Pooja") into the search box to view real-time filtering in action.