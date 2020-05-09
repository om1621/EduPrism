-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: May 05, 2020 at 04:34 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eduprism`
--

-- --------------------------------------------------------

--
-- Table structure for table `courseinstructor`
--

CREATE TABLE `courseinstructor` (
  `course_code` varchar(255) DEFAULT NULL,
  `instructor_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courseinstructor`
--

INSERT INTO `courseinstructor` (`course_code`, `instructor_id`) VALUES
('IJ20BPPL4C', 'RK'),
('IJ20BDBS4C', 'SM'),
('IJ20BDAA4C', 'MJ'),
('IJ20BCNW4C', 'SV'),
('IJ20BSWE4C', 'AV');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `name` varchar(255) DEFAULT NULL,
  `credit` int(11) DEFAULT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`name`, `credit`, `code`) VALUES
('computer networks', 4, 'IJ20BCNW4C'),
('DAA', 4, 'IJ20BDAA4C'),
('Database Management System', 4, 'IJ20BDBS4C'),
('Principle of Programming Languages', 4, 'IJ20BPPL4C'),
('Software Engineering ', 4, 'IJ20BSWE4C');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `course_code` varchar(255) DEFAULT NULL,
  `student_id` varchar(255) DEFAULT NULL,
  `c1_marks` int(11) DEFAULT NULL,
  `c2_marks` int(11) DEFAULT NULL,
  `c3_marks` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`course_code`, `student_id`, `c1_marks`, `c2_marks`, `c3_marks`) VALUES
('IJ20BPPL4C', 'iit2018065', 12, 15, 30),
('IJ20BPPL4C', 'iit2018066', 16, 0, 25),
('IJ20BPPL4C', 'IIt2018037', 11, 16, 27),
('IJ20BDBS4C', 'IIT2018070', 10, 15, 26),
('IJ20BDBS4C', 'iit2018072', 13, 13, 24),
('IJ20BPPL4C', 'IIT2018070', 13, 14, 25),
('IJ20BPPL4C', 'IIT2018072', 11, 17, 28),
('IJ20BDBS4C', 'IIT2018101', 13, 13, 27),
('IJ20BDBS4C', 'iit2018065', 15, 24, 36),
('IJ20BDBS4C', 'iit2018037', 16, 24, 35),
('IJ20BPPL4C', 'IIT2018101', 16, 26, 37),
('IJ20BSWE4C', 'iit2018037', 15, 24, 33),
('IJ20BSWE4C', 'iit2018065', 16, 25, 34),
('IJ20BSWE4C', 'IIT2018070', 17, 26, 34),
('IJ20BSWE4C', 'IIT2018072', 18, 22, 24),
('IJ20BSWE4C', 'iit2018101', 19, 22, 32),
('IJ20BDAA4C', 'iit2018037', 23, 24, 25),
('IJ20BDAA4C', 'iit2018065', 24, 25, 36),
('IJ20BDAA4C', 'iit2018070', 25, 27, 37),
('IJ20BDAA4C', 'iit2018072', 25, 22, 35),
('IJ20BDAA4C', 'IIT2018101', 23, 26, 36),
('IJ20BCNW4C', 'iit2018037', 17, 22, 32),
('IJ20BCNW4C', 'iit2018065', 24, 22, 31),
('IJ20BCNW4C', 'iit2018070', 16, 21, 33),
('IJ20BCNW4C', 'iit2018072', 20, 24, 35),
('IJ20BCNW4C', 'iit2018101', 22, 21, 34);

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `name` varchar(255) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `department` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile` decimal(11,0) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`name`, `id`, `department`, `address`, `mobile`, `email`, `gender`) VALUES
('Abhishek Vaish', 'AV', 'IT', 'CC-2, IIIT Allahabad', '9111111111', 'AVaish@gmail.com', 'Male'),
('Mohhamad Javed', 'MJ', 'IT', 'CC-1 , IIIT Allahabad', '9234567890', 'MohhamadJ@gmail.com', 'Male'),
('Rahul Kala', 'RK', 'IT', 'CC-2 , IIIT Allahabad', '9111567890', 'rk@gmail.com', 'Male'),
('Saumyadev Maity', 'SM', 'IT', 'CC-3 , IIIT Allahabad', '9111567890', 'sm@gmail.com', 'Male'),
('Shekhar Verma', 'SV', 'IT', 'CC - 3 , IIIT Allahabad', '9111116789', 'ShekharVerma@gmail.com', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `sender_id` varchar(255) DEFAULT NULL,
  `faculty_id` varchar(255) DEFAULT NULL,
  `que` varchar(255) DEFAULT NULL,
  `ans` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `sender_id`, `faculty_id`, `que`, `ans`) VALUES
(1, 'iit2018065', 'RK', 'Can I have answer sheet of C3 exam?', 'U will get it till tomorrow');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile` decimal(11,0) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `dob`, `branch`, `address`, `mobile`, `email`) VALUES
('IIT2018037', 'kshitij Gautam', '2000-09-04', 'IT', 'RaiBareli , Uttar Pradesh', '9111111189', 'kshitijgautam@gmail.com'),
('iit2018065', 'onkar telange', '2000-05-16', 'IT', 'bh2 iit allahabad , iiit road , jhalwa , allahabad', '7972930563', 'onkartelange2000@gmail.com'),
('iit2018066', 'Laxman Goliya', '2000-07-17', 'IT', 'Jaipur , Rajasthan', '9111111890', 'laxmanGoliya@gmail.com'),
('IIT2018070', 'Rahul Thalor', '2000-10-29', 'IT', 'Jaipur , Rajashthan', '7742111198', 'rahulthalor@gmail.com'),
('IIT2018072', 'Divyansh Bhorvanshi', '2000-03-19', 'IT', 'Ghora Dongri , Madhya Pradesh', '6265111119', 'divyanshbhorvanshi@gmail.com'),
('IIT2018101', 'Sourabh Thakur', '2000-12-23', 'IT', 'Nepanagar , Madhya Pradesh', '9785444498', 'saurabhthakur@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courseinstructor`
--
ALTER TABLE `courseinstructor`
  ADD KEY `course_code` (`course_code`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`code`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD KEY `course_code` (`course_code`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `faculty_id` (`faculty_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courseinstructor`
--
ALTER TABLE `courseinstructor`
  ADD CONSTRAINT `courseinstructor_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `courses` (`code`),
  ADD CONSTRAINT `courseinstructor_ibfk_2` FOREIGN KEY (`instructor_id`) REFERENCES `instructor` (`id`);

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`course_code`) REFERENCES `courses` (`code`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`faculty_id`) REFERENCES `instructor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
