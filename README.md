# FriendFinder

## Description 
- FriendFinder is a full-stack site that takes in results from user's surveys, then results are compared to other users surveys.
- The app will display the name and picture of the user with the best overall match.

## Prerequisites
- Node
- Express 
- Path 

## Installing 

Run these commands to install the pacakges:
```
npm install express
npm install path
```

## Instructions
- Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
- Your server.js file should require the basic npm packages we've used in class: express and path.
- Your htmlRoutes.js file should include two routes:
- A GET Route to /survey which should display the survey page.
- A GET Route to /survey which should display the survey page.
- Your apiRoutes.js file should contain two routes:
- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

https://drive.google.com/file/d/1i8XIAf4tyVubn_glDJxdQwpanN5eeSvp/view