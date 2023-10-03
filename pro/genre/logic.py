import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS #Strictly necessary!!!

app = Flask(__name__)
CORS(app) #CORS is used because Modern web browsers use it very commonly, which causes restricts with requests.  

@app.route('/api/get-movies', methods=['POST'])
def get_movies():
    try:
        # Get the selected genres from the POST request via genre.js
        selected_genres = request.json

        # Create a connection to the local database
        connection = mysql.connector.connect(
            host="localhost",
            port=3306,
            database="movie_dataset",
            user="root",
            password="tiger"
        )

        if connection.is_connected():
            print("Connected to database")

        suggested_movies = []  # Use a list to store the suggested movies

        with connection.cursor() as cursor:
            # Building the case-insensitive SQL query for selected genres
            query_builder = ["SELECT DISTINCT movie_name, movie_id FROM movies WHERE "]
            for i, genre in enumerate(selected_genres):
                query_builder.append("LOWER(genre) LIKE %s")
                if i < len(selected_genres) - 1:
                    query_builder.append(" AND ")

            query = "".join(query_builder)

            # Set parameters for each genre
            genre_parameters = ["%" + genre.strip().lower() + "%" for genre in selected_genres]

            cursor.execute(query, genre_parameters)

            for row in cursor.fetchall():
                movie_name = row[0]
                movie_id = row[1]  # Include the movie ID
                suggested_movies.append({"title": movie_name, "movie_id": movie_id})

        if suggested_movies:
            response_data = suggested_movies
            return jsonify(response_data)  # Return the response data in JSON format to genre.js
        else:
            return jsonify({"message": "No more movies found matching the genres."})

    except mysql.connector.Error as err:
        print("Error with database connectivity:", err)
        return jsonify({"error": "Database error"})

    # Close the connection with the database
    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()
            print("Connection closed!")

if __name__ == "__main__":
    app.run(host="localhost", port=8000)   
