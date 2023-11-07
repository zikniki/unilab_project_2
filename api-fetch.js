fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    let cards = '';
    data.forEach(post => {
      cards += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">User ID: ${post.id}</h5>
            <p class="card-text">${post.title}</p>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
      `;
    });
    document.getElementById('card-container').innerHTML = cards;
  })
  .catch(error => console.error('Error:', error));
