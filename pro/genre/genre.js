// Function to set a cookie
function setCookie(name, value, daysToExpire) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (daysToExpire * 24/* * 60 * 60 * 1000*/));
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  console.log('Cookie has been set.');
}


// Function to get a cookie
function getCookie(name) {
  const cookieName = `${name}=`;
  const cookieArray = document.cookie.split(';');
  
  for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
      }
  }
  
  return null;
}

// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}


// Function to set a cookie
function setCookie(name, value, daysToExpire) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (daysToExpire * 24/* * 60 * 60 * 1000*/));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  console.log('Cookie has been set.');
}

// Function to handle genre confirmation
function confirmGenres() {
    // Get the selected genres from the cookie or selectedGenres array
    const genresCookie = getCookie("selectedGenres");
    const selectedGenres = genresCookie ? JSON.parse(genresCookie) : [];

    // Log the selected genres for confirmation
    console.log('Selected Genres:', selectedGenres);

    

    // Remove the event listener to prevent multiple calls
    searchButton.removeEventListener('click', confirmGenres);

   // Redirect to the next page with selected genres as a query parameter
   const queryParams = selectedGenres.join('&');
   window.location.href = `final.html?genres=${queryParams}`;

   // Clear the selected genres (remove the cookie)
   deleteCookie("selectedGenres");
}

// Add an event listener to the "Search" button
const searchButton = document.getElementById('searchbtn');
searchButton.addEventListener('click', confirmGenres);




// Array to store selected genres
const selectedGenres = [];

function select(elementId) {
  const ink = document.getElementById(elementId);

  if (selectedGenres.includes(ink.id)) {
      const index = selectedGenres.indexOf(ink.id);
      if (index > -1) {
          selectedGenres.splice(index, 1);
      }
      ink.style.background = "white";
      ink.style.color = "green";
  } else {
      selectedGenres.push(ink.id);
      ink.style.background = "green";
      ink.style.color = "white";
  }

  // Store the selected genres in a cookie
  setCookie("selectedGenres", JSON.stringify(selectedGenres), 30); // '30' represents the number of days the cookie should expire in

  // Log the updated selected genres for reference
  console.log('Selected Genres:', selectedGenres);
}

// Function to initialize selected genres from the cookie (called on page load)
function initializeSelectedGenres() {
  const genresCookie = getCookie("selectedGenres");
  if (genresCookie !== null) {
      const storedGenres = JSON.parse(genresCookie);
      selectedGenres.push(...storedGenres);
      // Update the UI to reflect the stored genres (you can do this part)
      console.log('Initialized Selected Genres:', selectedGenres);
  }
}

// Call the function to initialize selected genres when the page loads
window.onload = initializeSelectedGenres;

// Function to send selected genres to the Java backend
function sendSelectedGenresToBackend() {
  const genresCookie = getCookie('selectedGenres');
  if (genresCookie) {
    const selectedGenres = JSON.parse(genresCookie);

    // Send the selectedGenres data to the Java backend using an HTTP request
    fetch('http://localhost:8080/api/get-movies', {
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

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

// Call the function to send selected genres when needed (e.g., after clicking a button)
sendSelectedGenresToBackend();
