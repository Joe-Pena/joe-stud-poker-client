# StudPoker

<img src="https://github.com/thinkful-ei24/joe-stud-poker-client/blob/master/src/images/studPokerFull.png" width="500">

Stud Poker is a single hand poker game.


Before playing, use the following demo account to login:

Username: test

Password: asdfqwer

https://dashboard.heroku.com/apps/stud-poker-client

If you're unfamiliar with how poker works, simply have a look at the landing page's instructions.

# Instructions
In this game the dealer gives you 5 poker cards to make a hand.
You can then choose to keep all your cards, or select cards to switch to try to make a new hand.

Then the better the hand, the more chips you win!

# API

https://stud-poker-server.herokuapp.com/

The API is used to create users aswell as logging in.

endpoint: /api/users, make a POST request here with a json body including:


    "username": "your_username",
    "email": "your_email",
    "password": "your_password"


endpoint: /auth/login
Login by making a POST to request and sending in your username and password as JSON in the body.
A succesful login will provide the user with a jwt token to be used for the remainder of the session.

# Stack

* React
* Redux
* Nodejs
* MongoDB
* Mongoose
* Express
* JWT

The following package is also used for the creation of a standard 52-card deck, and the evaluation of hands:

cards: https://www.npmjs.com/package/cards
poker ranking: https://www.npmjs.com/package/poker-ranking

