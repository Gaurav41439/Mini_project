// Get movie suggestions from local storage 
let suggestedMovies = JSON.parse(localStorage.getItem('suggestedMovies')) || [];

console.log(suggestedMovies);
console.log(Array.isArray(suggestedMovies));
console.log(typeof (suggestedMovies));

let currentMovieIndex = 0;

function getPosterUrl(movieId) {
    return `http://localhost:5500/posters/${movieId}.jpg`; 
}


// Function to display the current movie and poster
function displayCurrentMovie() {
    const moviePoster = document.getElementById('movie-poster');
    const movieTitle = document.getElementById('movie-title');

    moviePoster.innerHTML = '';
    movieTitle.innerHTML = '';

    if (currentMovieIndex >= 0 && currentMovieIndex < suggestedMovies.length) {
        const movieData = suggestedMovies[currentMovieIndex];
        const movieElement = document.createElement('div');

        // Create an image element for the poster
        const posterElement = document.createElement('img');
        posterElement.src = getPosterUrl(movieData.id); // Use "id" instead of "movie_id"
        posterElement.alt = `${movieData.title} Poster`;
        moviePoster.appendChild(posterElement);

        
        movieElement.textContent = movieData.title;
        movieTitle.appendChild(movieElement);
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

// "Next Movie" button
const nextMovieButton = document.getElementById('nxtmoviebtn');
nextMovieButton.addEventListener('click', showNextMovie);
