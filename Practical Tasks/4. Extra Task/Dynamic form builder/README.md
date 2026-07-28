# Dynamic Form Builder

A simple browser-based dynamic form builder. Use the UI to add headings, inputs, radio buttons, and buttons dynamically via prompts.

## Features
- Add `Heading`, `Text`, `Email`, `Password`, `Number`, `Radio`, and `Button` elements.
- Live preview in the page as you add fields.
- Heading updates the form title; buttons are added to the submit area.

## Usage
1. Open `index.html` in your browser (double-click or serve via a local server).
2. Click the **Add Input Field** button.
3. Enter a label name when prompted.
4. Enter an input type when prompted (Heading, Text, Email, Password, Number, Radio, Button).
5. The new element will appear in the form section.

## Files
- index.html — main page and UI
- script.js — form creation logic
- style.css — styles

## Notes
- The project uses prompt dialogs for input; canceling a prompt will stop the creation.