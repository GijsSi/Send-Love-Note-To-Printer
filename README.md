# Send Lovenote To Printer 

So this is perhaps the cringiest project I have done in a while. One of my best friends has opened a restaurant and while helping him they had a spare receipt printer that they weren't going to use, so I asked him if I could have it, the answer was yes. My girlfriend is leaving for a backpacking trip to asia in a week from now so I thought I would create a little geeky sunday afternoon project. Where she is able to send me little messages through a UI, that get printed via the receiptprinter that is standing on my desk. 

So the project makes use of a simple python script in the backend that is a Flask server that opens an end point listening for post requests with messages and sends them to the printer to get printed. The front end is a single page made with nextjs ( a bit overkill, i know, but i was lazy ). The backend runs on my own server in a docker container at home and all the requests get tunneled via cloudflare tunnels to my docker container. The frontend is hosted on Vercel. 

The printer I jused for this project is the Epson TM-m30II (But pretty sure any IP printer will work): 

<img src="https://github.com/GijsSi/Send-Love-Note-To-Printer/assets/21217320/b5710165-6103-4e50-8d77-e6be8d4c1d9e" width="50%" alt="Printer Image">

And this is what the frontend looks like ( dont judge me ):

<img width="50%" alt="Screenshot 2024-03-24 at 18 49 11" src="https://github.com/GijsSi/Send-Love-Note-To-Printer/assets/21217320/13ab405b-9e92-4236-8f9f-ea1ae782bcc5">
