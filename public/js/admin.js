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
      <div class="admin">
        <p class="sub-name">${subscriber.name}</p>
        <p class="sub-email">${subscriber.email}</p>
      </div>
    `;
  });

  document.querySelector(".subscribers").innerHTML = output;
})
.catch((error) => {
  console.log(error)
});
