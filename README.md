# Send Love Note To Printer 💖🖨️

So this is perhaps the cringiest project I have done in a while. One of my best friends has opened a restaurant and while helping him they had a spare receipt printer that they weren't going to use, so I asked him if I could have it, the answer was yes. My girlfriend is leaving for a backpacking trip to Asia in a week from now so I thought I would create a little geeky Sunday afternoon project. Where she is able to send me little messages through a UI, that get printed via the receipt printer that is standing on my desk. 😊

## Overview 📜

The project makes use of a simple Python script in the backend that is a Flask server, opening an endpoint listening for POST requests with messages and sends them to the printer to get printed. The front end is a single page made with Next.js (a bit overkill, I know, but I was lazy). The backend runs on my own server in a Docker container at home, and all the requests get tunneled via Cloudflare tunnels to my Docker container. The frontend is hosted on Vercel.

## Packages Used for the Backend 📦

- Flask
- Flask-Cors
- escpos-python

## The Printer Used For This Project 🖨️

The printer I used for this project is the Epson TM-m30II (But pretty sure any IP printer will work): 

<img src="https://github.com/GijsSi/Send-Love-Note-To-Printer/assets/21217320/b5710165-6103-4e50-8d77-e6be8d4c1d9e" width="50%" alt="Printer Image">

## Frontend Sneak Peek 👀

And this is what the frontend looks like:

<img width="50%" alt="Screenshot 2024-03-24 at 18 49 11" src="https://github.com/GijsSi/Send-Love-Note-To-Printer/assets/21217320/13ab405b-9e92-4236-8f9f-ea1ae782bcc5">

This project is a heartfelt way to stay connected through technology and little printed messages. Perfect for sending love notes, reminders, or just to say "thinking of you" while being miles apart. 💑✈️🌏
