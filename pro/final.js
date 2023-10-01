// Get movie suggestions from local storage
let suggestedMovies = JSON.parse(localStorage.getItem('suggestedMovies')) || [];

console.log(suggestedMovies);
console.log(Array.isArray(suggestedMovies));
console.log(typeof (suggestedMovies));


function getQueryParameters() {
    const queryParams = new URLSearchParams(window.location.search);
    const genres = queryParams.get('genres');
    return genres ? genres.split(',') : [];
}

// Initialize an index to keep track of the current movie
let currentMovieIndex = 0;


// Function to display the current movie
function displayCurrentMovie() {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';
    
    if (currentMovieIndex >= 0 && currentMovieIndex < suggestedMovies.length) {
        const movieElement = document.createElement('div');
        movieElement.textContent = suggestedMovies[currentMovieIndex];
        movieContainer.appendChild(movieElement);
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
const nextMovieButton = document.getElementById('next-movie-btn');
nextMovieButton.addEventListener('click', showNextMovie);