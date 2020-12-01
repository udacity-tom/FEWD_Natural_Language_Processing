# FEWD_Natural_Language_Processing Evaluating News Articles

Front End Web Developer Nanodegree, Evaluate a News Article with Natural Language Processing


## Introduction/Usage 

In creating this project various asynchronous functions were used within a node server in order to provide a natural language anaylsis of a news article.
By utilising the [Meaning Cloud](https://www.meaningcloud.com/) API, source material (in the form of plain text or a URL) was analysed.  Both summary and detailed natural language processing was performaed, only summary information has been implemented into this web app and is displayed in the results section, below the input.

In use, the user can firstly select whether to analyse plain Text or an external text source using a URL. 
Click on the switch to select either one or the other. 

Enter Text/URL, hit Analyse Text/Analyse URL. 

After a few moments the [Meaning Cloud](https://www.meaningcloud.com/) API will respond with a summary and a detailed natural language analysis. (Only the summary analysis is displayed at this time.)


## Installation, Environment Setup & What's Installed

After installing node and build packages, run the following scripts: 

* `npm run start`
This will initiate the node server 
* `npm build-dev`
A working copy of the development build will be run on the webpack dev server and opened in the default browser
* `npm build-prod`
Will build the distribution folders according to the webpack production configuration


## Technologies Used

- Javascript (async, fetch, wait, etc in a modular design)
- Node (For server and client)
- Webpack (for development & production purposes for configuration/optimisation)
- Jest (for JS testing)
- Service Workers (for offline viewing of the webpage)
- Basic Error handling (pass-through of API errors/protocol checks on URLs)
- HTML/SASS/CSS/DOM Manipulation (For UI)


## About Udacity's Front End Developer Nanodegree

The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker. [Udacity Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)