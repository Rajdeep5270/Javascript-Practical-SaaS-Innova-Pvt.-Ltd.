# Data Analysis Dashboard

This project is a small interactive dashboard built with HTML, CSS, and JavaScript. It pulls sample user data from the DummyJSON API and turns it into a simple analytics view with summary cards and charts.

## What this project does

The dashboard gives a quick look at user-related data in a clean, easy-to-read layout. You can see:
- how many users belong to each role (Admin, Moderator, and User)
- basic statistics such as average, minimum, maximum, and total values
- a visual chart based on the selected category and chart type

## Main features

- Fetches live sample data from the DummyJSON API
- Shows role-based counts in the top section
- Calculates summary values for age, height, and weight
- Lets you switch between different metrics with a dropdown
- Generates bar or pie charts with Chart.js
- Keeps the design simple and beginner-friendly

## Technologies used

- HTML
- CSS
- JavaScript
- Chart.js

## File structure

- index.html — contains the dashboard layout and UI elements
- style.css — handles the visual styling of the page
- script.js — fetches data, calculates results, and renders charts

## How it works

When the page loads, it requests user data from the API and displays the counts for each role. You can then choose a metric such as age or height to view its summary values, or select a category and chart type to generate a graph.

## How to run it

Open the project folder and load index.html in your browser.

If you prefer, you can also run it from a simple local server, but opening the file directly will usually work fine.

## Note

This dashboard needs an internet connection to fetch data from the API, and the Chart.js library must be available for the charts to appear.
