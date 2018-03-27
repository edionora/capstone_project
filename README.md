# Project Proposal Outline

**Description**: a paragraph explaining the big picture overview of your final project idea

My final project idea is to have a 3D model outlining the anatomy of the human muscular system, as well as buttons that focus on certain muscular groups. The purpose for focusing on said certain muscular groups is so that the program can suggest a list of workouts that target these specific muscular groups.

**Core Features**: what are the core features that you will be in your phase 1?

- 3D model of the muscular system
- Buttons that focus on specific muscular groups
- Database of workouts that pertain to particular muscle groups
- onClick handlers that render the list of workouts onto the page whenever user clicks a muscle/muscle group


**Stretch Features**: what are the "nice-to-have" and "amazing-to-have" features that you will stretch for if you have time?

- A welcome page that stores a users name (in local storage)
- Fitness goal options for users (i.e. lose weight, lose body fat, gain muscle, etc.)
- Suggested nutrition and workout guides for users in accordance to their fitness goal
- A history that keeps tracks of workouts done, or maybe user's current weight, body fat ratio, etc.
- Statistics
- Incorporate wearable technology (portable devices i.e. apple watch) -> send alerts of worout goals to mobile


**User Stories**: at least one user story explaining how a user would use one feature

A user would first enter their name, and would then be kept in local storage. Once a username has been entered, the user can now use the buttons to the side of the 3D model and have the model focus on the muscle group that was clicked. The page then renders a list of possible workouts that can be done in order to target that muscle group. The user may also use the model to further learn and discover the wide variety of muscles that make up the human body


**Tech-Stack**: 

- what technologies will you be using? Node? React? Mongo?
- any npm packages or other dependencies you know you will need?

Recquired dependencies: react, node, body-parser


**Description of Data**: A paragraph describing what data your application will use. What data will your app need to manage? Is it persistent? where does it come from?


## Front-End: 
 - site map - what screens will your front end have?

My application will essentially be a single page application (SPA) so it will mainly be on the front-end aspect

## Server-side:
 - endpoints
 - database schemas (if using db)

 In regards to server-side, I am still unsure as to what endpoints I would need if any

**Project Timeline**: what order will you implement the features in? what are your milestones and what dates do you expect to have each completed by? Focus on


The first and probaby the most crucial piece to this project would be the 3D Human Model API so it goes without question that it has to be the first thing thats implemented. Moving forward, I plan on creating the components and testing for functionality individually as well as starting the database and node server initialization side-by-side. Full functionality at the very least, for the buttons, must be completed by the end of Tuesday, or at the start of Wednesday morning if extension is necessary. Wendnesday is when the database for each muscle group must be started. An ideal situation would be the completion of the database population and the start of a few CSS stylings. The rest of the week will be used to implement further detailing, planning for the expansion beyond core features, as well as re-planning if deemed necessary