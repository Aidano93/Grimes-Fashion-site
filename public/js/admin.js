'use strict'

fetch('api/v0/subscribers')
.then((res) => {
  if (!res.ok) throw new Error('Not OK!')

  return res.json()
})
.then((subscribers) => {
  
  let output = '';

  subscribers.forEach(function(subscriber) {
    output += `
      <div>
        <p>${subscriber.name}</p>
        <p>${subscriber.email}</p>
      </div>
    `;
  });

  document.querySelector(".subscribers").innerHTML = output;
})
.catch((error) => {
  console.log(error)
});
