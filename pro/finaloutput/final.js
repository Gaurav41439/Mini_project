// Get movie suggestions from local storage 
let suggestedMovies = JSON.parse(localStorage.getItem('suggestedMovies')) || [];

console.log(suggestedMovies);
console.log(Array.isArray(suggestedMovies));
console.log(typeof (suggestedMovies));

let currentMovieIndex = 0;

function getPosterUrl(movieId) {
    return `http://localhost:5500/pro/posters/${movieId}.jpg`; 
}

const moviePoster = document.getElementById('movie-poster');
const movieTitle = document.getElementById('movie-title');
const noMoreMoviesSection = document.getElementById('no-more-movies');

// Function to display the current movie and poster
function displayCurrentMovie() {
    moviePoster.innerHTML = '';
    movieTitle.innerHTML = '';

    if (currentMovieIndex >= 0 && currentMovieIndex < suggestedMovies.length) {
        const movieData = suggestedMovies[currentMovieIndex];
        const movieElement = document.createElement('div');

        // Create an image element for the poster
        const posterElement = document.createElement('img');
        posterElement.src = getPosterUrl(movieData.id);
        posterElement.alt = `${movieData.title} Poster`;
        moviePoster.appendChild(posterElement);

        movieElement.textContent = movieData.title;
        movieTitle.appendChild(movieElement);

        // Show the movie container and hide the "No more movies" section
        moviePoster.style.display = 'block';
        movieTitle.style.display = 'block';
        noMoreMoviesSection.style.display = 'none';
    } else {
        // Hide the movie container and show the "No more movies" section
        moviePoster.style.display = 'none';
        movieTitle.style.display = 'none';
        noMoreMoviesSection.style.display = 'block';
    }
}

function showNextMovie() {
    if (currentMovieIndex < suggestedMovies.length - 1) {
        currentMovieIndex++;
        displayCurrentMovie();
    } else {
        // Hide the movie container, title, and button
        moviePoster.style.display = 'none';
        movieTitle.style.display = 'none';
        noMoreMoviesSection.style.display = 'block';

        // Hide "Your Movie" heading and "Next Movie" button
        document.querySelector('.first').style.display = 'none';
        document.getElementById('nxtmoviebtn').style.display = 'none';
    }
}
// Add an event listener to the "Search" button
const BackButton = document.getElementById('backbtn');
BackButton.addEventListener('click', sorryPage);

function sorryPage() {
    window.location.href = '../genre/genre.html';
}

// Call the displayCurrentMovie function to show the initial movie
displayCurrentMovie();
// "Next Movie" button
const nextMovieButton = document.getElementById('nxtmoviebtn');
nextMovieButton.addEventListener('click', showNextMovie);
