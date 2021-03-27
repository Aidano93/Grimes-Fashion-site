'use strict'
import {Images} from './images';

// Fetching from server
fetch('/api/v0/gallery')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(Images){
    // Any code that depends on the `data` must go in this block
    
  
   
    let output = '';

    Images.forEach(function(image) {
      output += `<figure class="card">
                    <img src="${image.pathURL}" alt="${image.title}"
                    width="${image.width}" height="${image.height}">
                    <figcaption>
                      <h2>${image.description}</h2>
                    </figcaption>
                  </figure>`;
    });

    document.querySelector(".gallery").innerHTML = output;
    
    })

  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });