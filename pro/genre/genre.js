// Function to handle genre confirmation
function confirmGenres() {
  // Get the selected genres from the array
  const selectedGenres = [...document.querySelectorAll('.selected-genre')].map((ink) => ink.id);

  // keeping logs of selected genres for confirmation
  console.log('Selected Genres:', selectedGenres);

  // Remove the event listener to prevent multiple calls
  searchButton.removeEventListener('click', confirmGenres);

  // Send the selected genres to the backend using AJAX
  fetch('http://localhost:8000/api/get-movies', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedGenres),
  })
  .then((response) => response.json())
  .then((data) => {
      // Handle the response data from the backend (suggested movies)
      console.log('Suggested movies:', data);
      // You can update your UI with the suggested movies here

      // Store the data in local storage
      localStorage.setItem('suggestedMovies', JSON.stringify(data));

      // Redirect to final.js
      window.location.href = '../finaloutput/final.html';
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}

// Add an event listener to the "Search" button
const searchButton = document.getElementById('searchbtn');
searchButton.addEventListener('click', confirmGenres);

// Function to select genres
function select(elementId) {
  const ink = document.getElementById(elementId);

  if (ink.classList.contains('selected-genre')) {
      ink.classList.remove('selected-genre');
      ink.style.background = "white";
      ink.style.color = "green";
  } else {
      ink.classList.add('selected-genre');
      ink.style.background = "green";
      ink.style.color = "white";
  }
}
