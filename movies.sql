-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql6.freesqldatabase.com
-- Generation Time: Aug 02, 2023 at 04:13 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6637049`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `movie_name` varchar(255) DEFAULT NULL,
  `year_of_release` int(11) DEFAULT NULL,
  `category` varchar(2) DEFAULT NULL,
  `run_time` varchar(10) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `imdb_rating` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `movie_name`, `year_of_release`, `category`, `run_time`, `genre`, `imdb_rating`) VALUES
(1, 'The Godfather', 1972, 'R', '175 min', 'Crime, Drama', '9.2'),
(2, 'The Silence of the Lambs', 1991, 'R', '118 min', 'Crime, Drama, Thriller', '8.6'),
(3, 'Star Wars: Episode V - The Empire Strikes Back', 1980, 'PG', '124 min', 'Action, Adventure, Fantasy', '8.7'),
(4, 'The Shawshank Redemption', 1994, 'R', '142 min', 'Drama', '9.3'),
(5, 'The Shining', 1980, 'R', '146 min', 'Drama, Horror', '8.4'),
(6, 'Casablanca', 1942, 'PG', '102 min', 'Drama, Romance, War', '8.5'),
(7, 'One Flew Over the Cuckoo\'s Nest', 1975, 'R', '133 min', 'Drama', '8.7'),
(8, 'Indiana Jones and the Raiders of the Lost Ark', 1981, 'PG', '115 min', 'Action, Adventure', '8.4'),
(9, 'The Lord of the Rings: The Return of the King', 2003, 'PG', '201 min', 'Action, Adventure, Drama', '9.0'),
(10, 'Star Wars: Episode IV - A New Hope', 1977, 'PG', '121 min', 'Action, Adventure, Fantasy', '8.6'),
(11, 'The Dark Knight', 2008, 'PG', '152 min', 'Action, Crime, Drama', '9.0'),
(12, 'The Godfather: Part II', 1974, 'R', '202 min', 'Crime, Drama', '9.0'),
(13, 'Aliens', 1986, 'R', '137 min', 'Action, Adventure, Sci-Fi', '8.4'),
(14, 'Schindler\'s List', 1993, 'R', '195 min', 'Biography, Drama, History', '9.0'),
(15, 'Inception', 2010, 'PG', '148 min', 'Action, Adventure, Sci-Fi', '8.8'),
(16, 'The Lord of the Rings: The Fellowship of the Ring', 2001, 'PG', '178 min', 'Action, Adventure, Drama', '8.8'),
(17, 'Alien', 1979, 'R', '117 min', 'Horror, Sci-Fi', '8.5'),
(18, 'Some Like It Hot', 1959, 'Pa', '121 min', 'Comedy, Music, Romance', '8.2'),
(19, 'Blade Runner', 1982, 'R', '117 min', 'Action, Drama, Sci-Fi', '8.1'),
(20, 'Se7en', 1995, 'R', '127 min', 'Crime, Drama, Mystery', '8.6'),
(21, 'Apocalypse Now', 1979, 'R', '147 min', 'Drama, Mystery, War', '8.5'),
(22, '12 Angry Men', 1957, 'Ap', '96 min', 'Crime, Drama', '9.0'),
(23, 'The Lord of the Rings: The Two Towers', 2002, 'PG', '179 min', 'Action, Adventure, Drama', '8.8'),
(24, 'Terminator 2: Judgment Day', 1991, 'R', '137 min', 'Action, Sci-Fi', '8.6'),
(25, 'Star Wars: Episode VI - Return of the Jedi', 1983, 'PG', '131 min', 'Action, Adventure, Fantasy', '8.3'),
(26, 'Die Hard', 1988, 'R', '132 min', 'Action, Thriller', '8.2'),
(27, 'Gone with the Wind', 1939, 'Pa', '238 min', 'Drama, Romance, War', '8.2'),
(28, 'Taxi Driver', 1976, 'R', '114 min', 'Crime, Drama', '8.2'),
(29, 'Pulp Fiction', 1994, 'R', '154 min', 'Crime, Drama', '8.9'),
(30, 'The Bridge on the River Kwai', 1957, 'PG', '161 min', 'Adventure, Drama, War', '8.2'),
(31, 'The Lion King', 1994, 'G', '88 min', 'Animation, Adventure, Drama', '8.5'),
(32, 'North by Northwest', 1959, 'Ap', '136 min', 'Action, Adventure, Mystery', '8.3'),
(33, 'Rear Window', 1954, 'PG', '112 min', 'Mystery, Thriller', '8.5'),
(34, 'LÃ©on: The Professional', 1994, 'R', '110 min', 'Action, Crime, Drama', '8.5'),
(35, 'Back to the Future', 1985, 'PG', '116 min', 'Adventure, Comedy, Sci-Fi', '8.5'),
(36, 'Citizen Kane', 1941, 'PG', '119 min', 'Drama, Mystery', '8.3'),
(37, 'Goodfellas', 1990, 'R', '145 min', 'Biography, Crime, Drama', '8.7'),
(38, 'Memento', 2000, 'R', '113 min', 'Mystery, Thriller', '8.4'),
(39, 'American Beauty', 1999, 'R', '122 min', 'Drama', '8.4'),
(40, 'As Good as It Gets', 1997, 'PG', '139 min', 'Comedy, Drama, Romance', '7.7'),
(41, 'Forrest Gump', 1994, 'PG', '142 min', 'Drama, Romance', '8.8'),
(42, 'Singin\' in the Rain', 1952, 'G', '103 min', 'Comedy, Musical, Romance', '8.3'),
(43, 'Braveheart', 1995, 'R', '178 min', 'Biography, Drama, History', '8.4'),
(44, 'Saving Private Ryan', 1998, 'R', '169 min', 'Drama, War', '8.6'),
(45, 'Rain Man', 1988, 'R', '133 min', 'Drama', '8.0'),
(46, 'The King\'s Speech', 2010, 'R', '118 min', 'Biography, Drama, History', '8.0'),
(47, '2001: A Space Odyssey', 1968, 'G', '149 min', 'Adventure, Sci-Fi', '8.3'),
(48, 'Kill Bill: Vol. 1', 2003, 'R', '111 min', 'Action, Crime, Drama', '8.2'),
(49, 'Avanti!', 1972, 'R', '144 min', 'Comedy, Romance', '7.2'),
(50, 'The Good, the Bad and the Ugly', 1966, 'Ap', '178 min', 'Adventure, Western', '8.8'),
(51, 'AmÃ©lie', 2001, 'R', '122 min', 'Comedy, Romance', '8.3'),
(52, 'Modern Times', 1936, 'G', '87 min', 'Comedy, Drama, Romance', '8.5'),
(53, 'Lost in Translation', 2003, 'R', '102 min', 'Comedy, Drama', '7.7'),
(54, 'Full Metal Jacket', 1987, 'R', '116 min', 'Drama, War', '8.3'),
(55, 'Requiem for a Dream', 2000, 'R', '102 min', 'Drama', '8.3'),
(56, 'Fight Club', 1999, 'R', '139 min', 'Drama', '8.8'),
(57, 'No Country for Old Men', 2007, 'R', '122 min', 'Crime, Drama, Thriller', '8.2'),
(58, 'Django Unchained', 2012, 'R', '165 min', 'Drama, Western', '8.4'),
(59, 'Children of Men', 2006, 'R', '109 min', 'Action, Drama, Sci-Fi', '7.9'),
(60, 'Ratatouille', 2007, 'G', '111 min', 'Animation, Adventure, Comedy', '8.1'),
(61, 'The Lives of Others', 2006, 'R', '137 min', 'Drama, Mystery, Thriller', '8.4'),
(62, 'The Prestige', 2006, 'PG', '130 min', 'Drama, Mystery, Sci-Fi', '8.5'),
(63, 'V for Vendetta', 2005, 'R', '132 min', 'Action, Drama, Sci-Fi', '8.2'),
(64, 'Chinatown', 1974, 'R', '130 min', 'Drama, Mystery, Thriller', '8.2'),
(65, 'City of God', 2002, 'R', '130 min', 'Crime, Drama', '8.6'),
(66, 'To Have and Have Not', 1944, 'Pa', '100 min', 'Adventure, Comedy, Film-Noir', '7.8'),
(67, 'Fargo', 1996, 'R', '98 min', 'Crime, Thriller', '8.1'),
(68, 'Life of Pi', 2012, 'PG', '127 min', 'Adventure, Drama, Fantasy', '7.9'),
(69, 'Slumdog Millionaire', 2008, 'R', '120 min', 'Crime, Drama, Romance', '8.0'),
(70, 'Vertigo', 1958, 'PG', '128 min', 'Mystery, Romance, Thriller', '8.3'),
(71, 'Trainspotting', 1996, 'R', '93 min', 'Drama', '8.1'),
(72, 'Interstellar', 2014, 'PG', '169 min', 'Adventure, Drama, Sci-Fi', '8.6'),
(73, 'The Thing', 1982, 'R', '109 min', 'Horror, Mystery, Sci-Fi', '8.2'),
(74, 'The Third Man', 1949, 'Ap', '93 min', 'Film-Noir, Mystery, Thriller', '8.1'),
(75, '12 Monkeys', 1995, 'R', '129 min', 'Mystery, Sci-Fi, Thriller', '8.0'),
(76, 'Life Is Beautiful', 1997, 'PG', '116 min', 'Comedy, Drama, Romance', '8.6'),
(77, 'The Pianist', 2002, 'R', '150 min', 'Biography, Drama, Music', '8.5'),
(78, 'Magnolia', 1999, 'R', '188 min', 'Drama', '8.0'),
(79, 'The Dark Knight Rises', 2012, 'PG', '164 min', 'Action, Drama', '8.4'),
(80, 'Star Wars: Episode VII - The Force Awakens', 2015, 'PG', '138 min', 'Action, Adventure, Sci-Fi', '7.8'),
(81, 'The Hobbit: The Desolation of Smaug', 2013, 'PG', '161 min', 'Adventure, Fantasy', '7.8'),
(82, 'Mad Max: Fury Road', 2015, 'R', '120 min', 'Action, Adventure, Sci-Fi', '8.1'),
(83, '12 Years a Slave', 2013, 'R', '134 min', 'Biography, Drama, History', '8.1'),
(84, 'Indiana Jones and the Last Crusade', 1989, 'PG', '127 min', 'Action, Adventure', '8.2'),
(85, 'O Brother, Where Art Thou?', 2000, 'PG', '107 min', 'Adventure, Comedy, Crime', '7.7'),
(86, 'Inglourious Basterds', 2009, 'R', '153 min', 'Adventure, Drama, War', '8.3'),
(87, 'The Departed', 2006, 'R', '151 min', 'Crime, Drama, Thriller', '8.5'),
(88, 'A Beautiful Mind', 2001, 'PG', '135 min', 'Biography, Drama', '8.2'),
(89, 'District 9', 2009, 'R', '112 min', 'Action, Sci-Fi, Thriller', '7.9'),
(90, 'The Piano', 1993, 'R', '121 min', 'Drama, Music, Romance', '7.5'),
(91, 'Mystic River', 2003, 'R', '138 min', 'Crime, Drama, Mystery', '7.9'),
(92, 'The Insider', 1999, 'R', '157 min', 'Biography, Drama, Thriller', '7.8'),
(93, 'L.A. Confidential', 1997, 'R', '138 min', 'Crime, Drama, Mystery', '8.2'),
(94, 'Heat', 1995, 'R', '170 min', 'Action, Crime, Drama', '8.3'),
(95, 'The Usual Suspects', 1995, 'R', '106 min', 'Crime, Drama, Mystery', '8.5'),
(96, 'Cool Hand Luke', 1967, 'GP', '127 min', 'Crime, Drama', '8.1'),
(97, 'Eternal Sunshine of the Spotless Mind', 2004, 'R', '108 min', 'Drama, Romance, Sci-Fi', '8.3'),
(98, 'City Lights', 1931, 'G', '87 min', 'Comedy, Drama, Romance', '8.5'),
(99, 'The Matrix', 1999, 'R', '136 min', 'Action, Sci-Fi', '8.7'),
(100, 'The Big Short', 2015, 'R', '130 min', 'Biography, Comedy, Drama', '7.8');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
