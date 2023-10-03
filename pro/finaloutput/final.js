// Get movie suggestions from local storage
let suggestedMovies = JSON.parse(localStorage.getItem('suggestedMovies')) || [];

console.log(suggestedMovies);
console.log(Array.isArray(suggestedMovies));
console.log(typeof (suggestedMovies));

let currentMovieIndex = 0;

function getPosterUrl(movieId) {
    return `http://localhost:8000/posters/${movieId}.jpg`; // Adjust the path as needed
}


// Function to display the current movie and poster
function displayCurrentMovie() {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    if (currentMovieIndex >= 0 && currentMovieIndex < suggestedMovies.length) {
        const movieData = suggestedMovies[currentMovieIndex];
        const movieElement = document.createElement('div');
        movieElement.textContent = movieData.title;
        movieContainer.appendChild(movieElement);

        // Create an image element for the poster
        const posterElement = document.createElement('img');
        posterElement.src = getPosterUrl(movieData.id); // Use "id" instead of "movie_id"
        posterElement.alt = `${movieData.title} Poster`;
        movieContainer.appendChild(posterElement);
    } else {
        movieContainer.textContent = 'No more movies found.';
    }
}

// Call the displayCurrentMovie function to show the initial movie
displayCurrentMovie();

// Function to show the next movie
function showNextMovie() {
    if (currentMovieIndex < suggestedMovies.length - 1) {
        currentMovieIndex++;
        displayCurrentMovie();
    } else {
        alert('No more movies found.');
    }
}

// Add an event listener to the "Next Movie" button
const nextMovieButton = document.getElementById('nxtmoviebtn');
nextMovieButton.addEventListener('click', showNextMovie);
