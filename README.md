# Burger Logger

This burger logging app is deceptively simple. The whole premise is to create a list of meatless burgers you'd like to eat then "devour" them by clicking a button and moving them into the Digestin' list (pictures provided below).

The app is built using MySQL and Node to query and route data in the app, Express as a middleware throughout, Handlebars to generate the HTML and a homemade ORM to create the database query models. It was built on top of an MVC design pattern to organize files and functionality.

---
When the home page is first visited, pre-existing burger entries are pulled from the database and displayed respectively on page.
![Image of Burger App](/public/assets/img/img1.png)

A new veggie-burger can be added to the list by entering its name in the text box and clicking "Submit". 
![Image of Burger App](/public/assets/img/img2.png)

That burger is then added to the "Eat-Em-Up" list with a "Devour" button. 
![Image of Burger App](/public/assets/img/img3.png)

Clicking the devour button will move the burger to the digesting list.
![Image of Burger App](/public/assets/img/img4.png)

All of these changes are logged to the database and will be persistent to future visits.

Play around with it yourself here: [Deployed Site](https://obscure-shelf-18720.herokuapp.com/)