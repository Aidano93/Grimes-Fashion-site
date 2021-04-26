# Grimes Fashion House

- [GH Repo](https://github.com/cowtowndusty/cpnt262-FINAL)
- [Deployed Heroku URL](https://sait-cpnt262-FINAL.herokuapp.com/)

## Team Members
- [Makayla Martineau Raymundo](https://github.com/MakaylaMR)
- [Joel Kaye](https://github.com/kayej22)
- [Dustin Shulz](https://github.com/cowtowndusty)
- [Aidan O'Reilly](https://github.com/Aidano93)

## Overview

A multi-page, database-driven product website utilizing Express, EJS & Mongoose deployed to Heroku and MongoDB Atlas.

## Description

### Rendered HTML Endpoints
The following HTML endpoints can be found on our site:
- Index (/) - Splash page with company logo and link to the gallery.
- Gallery (/gallery) - Displays 12 images.
  - 'id' utilized by click handler to direct to single image page.
- Single image (/gallery/:id) - Images on the gallery page can be clicked to navigate to the single image page for each.
- Team (/team) - Displays a list of TEAM TONY, image and descriptions included.
- Admin (/admin) - Displays a list of current subscribers.
- Subscribe (/subscribe) - Displays a mailing list sign up form

All pages are rendered via EJS in the views directory. Partials: 'head', 'header', 'footer', and 'nav' are included in each page.

Routes for each HTML endpoint can be found in the index.js file of the routes directory.

### Schema/Model
The following schemas are defined and can be found in the models directory:
- gallery.js
- member.js
- subscriber.js

These models are used to import the seeds data to our database through the connection.js and import.js files. 

A seeds directory can be found in the main directory and includes an object array for the gallery, team, and admin pages.

### JSON Endpoints:
An API was created and can be found in the routes directory. This API serves the following endpoints:
- gallery JSON: /api/v0/gallery
- team JSON: /api/v0/members
- subscribers JSON: /api/v0/subscribers

The fetch() method is utilized in the client side javascript files to pull in our data from the database and put it on their respective pages. client.js serves the gallery, member.js serves the team info, and subscriber.js serves the sub list.

### Fancy Feature
The fancy feature is a hero section on the home page that incorporates the Greensock animation framework.

Two SVG files were made (logo & logotext) and animated to scale up from zero to full opacity and "bounce" into place. A delay was placed on the text svg to offset the effects and make the overall animation more visually appealing. To acheive this animation required multiple effects to be stacked. The first effect called for the svg's to be hidden before beginning the animation, the second called for the actual scaling animation.

A tagline was also incorporated into the feature. This object had to first be given an opacity and delay effect so it remained hidden while the logo and logo text finished their animation durations. Once they finished the tagline was then triggered to begin it's slide in animation with a bounce ending. 

A button was also included with a link to Tony's fabulous 2021 fashion collection.

## Attributions:
- [Roman Shilin](https://unsplash.com/@romashilin)
- [Laura Chouette](https://unsplash.com/@laurachouette)
- [Omid Armin](https://unsplash.com/@omidarmin)
- [Graham Mansfield](https://unsplash.com/@grahammansfield1)
- [Houcine Ncib](https://unsplash.com/@houcinencibphotography)
- [Tyler Nix](https://unsplash.com/@jtylernix)
- [Duane Mendes](https://unsplash.com/@duanemendes)
- [Joshua Rondeau](https://unsplash.com/@liferondeau)
- [Albert Vincent Wu](https://unsplash.com/@albertvincentwu)
- [Sarah Khan](https://unsplash.com/@itssarahkhan)
- [Jon Tyson](https://unsplash.com/@jontyson)
- [Sour Moha](https://unsplash.com/@sour_moha)
  - [Unsplash License](https://unsplash.com/license)

- [Tony Grimes](https://github.com/acidtone)
  - For his pretty face.
