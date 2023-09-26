import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MovieSuggestionServlet {

    public static void main(String[] args) throws IOException {
        int serverPort = 5500;
        HttpServer server = HttpServer.create(new InetSocketAddress(serverPort), 0);
        
        // Create a context for handling the get-movies request
        server.createContext("/api/get-movies", new GetMoviesHandler());
        
        server.start();
        System.out.println("Server is listening on port " + serverPort);
    }
}

class GetMoviesHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // Parse the request body to get selected genres
        List<String> selectedGenres = new ArrayList<>();
        try {
            String requestBody = new String(exchange.getRequestBody().readAllBytes());
            // Assuming the request body contains JSON like: { "genres": ["Thriller", "Comedy"] }
            // You may need to use a JSON library to parse this JSON
            // Here, we assume a simple comma-separated string in the "genres" parameter
            String genresParam = requestBody.substring(requestBody.indexOf(":") + 2, requestBody.length() - 2);
            String[] genresArray = genresParam.split(",");
            for (String genre : genresArray) {
                selectedGenres.add(genre.trim());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Database connection details
        String jdbcUrl = "jdbc:mysql://localhost:3306/movie_dataset";
        String username = "root";
        String password = "tiger";

        try (
            Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
            PreparedStatement preparedStatement = createPreparedStatement(connection, selectedGenres);
            ResultSet resultSet = preparedStatement.executeQuery();
        ) {
            List<String> suggestedMovies = new ArrayList<>();
            while (resultSet.next()) {
                String movieName = resultSet.getString("movie_name");
                suggestedMovies.add(movieName);
            }

            // Convert the suggested movies to a JSON response
            String jsonResponse = String.join(",", suggestedMovies);

            // Send the JSON response
            exchange.sendResponseHeaders(200, jsonResponse.length());
            OutputStream os = exchange.getResponseBody();
            os.write(jsonResponse.getBytes());
            os.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private PreparedStatement createPreparedStatement(Connection connection, List<String> genres) throws SQLException {
        String query = "SELECT DISTINCT movie_name FROM movies WHERE ";
        for (int i = 0; i < genres.size(); i++) {
            query += "LOWER(genre) LIKE ?";
            if (i < genres.size() - 1) {
                query += " OR ";
            }
        }

        PreparedStatement preparedStatement = connection.prepareStatement(query);

        for (int i = 0; i < genres.size(); i++) {
            preparedStatement.setString(i + 1, "%" + genres.get(i).toLowerCase() + "%");
        }

        return preparedStatement;
    }
}
