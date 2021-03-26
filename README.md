# CPNT262-FINAL: Group Project - Deployed Product/Services Website

## Team Members
- [Makayla Martineau Raymundo](https://github.com/MakaylaMR)
- [Joel Kaye](https://github.com/kayej22)
- [Dustin Shulz](https://github.com/cowtowndusty)
- [Aidan O'Reilly](https://github.com/Aidano93)


- [GH Repo](https://github.com/cowtowndusty/cpnt262-FINAL)
- [Deployed Heroku URL](https://sait-cpnt262-FINAL.herokuapp.com/)

A multi-page, database-driven product website using Express, EJS & Mongoose deployed to Heroku and MongoDB Atlas.

## Description

### Rendered HTML Endpoints
The following HTML endpoints can be found on our site:
- index (/) : Splash page with company logo and link to the gallery.
- gallery (/gallery) : displays 12 images.
- single image (/gallery/:id) : Images on the gallery page can be clicked to navigate to the single image page for each.
- team (/team) : Displays a list of TEAM TONY, image and descriptions included.
- admin (/admin) : Displays a list of current subscribers.

All pages are rendered via EJS in the views directory. Partials: 'head', 'header', 'footer', and 'nav' are included in each page.

Routes for each HTML endpoint can be found in the index.js file of the routes directory.

### Schema/model
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

The fetch() method is utilized in the client side javascript files to pull in our data from the database and put it on their respective pages. public/js/script.js serves the gallery, and public/js/member.js serves the team info.

## Fancy Feature
TO DO:
Details on what your Fancy Feature is an where to find it.



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