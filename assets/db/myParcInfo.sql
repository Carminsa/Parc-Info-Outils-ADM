-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Dim 05 Mars 2017 à 20:08
-- Version du serveur :  10.1.16-MariaDB
-- Version de PHP :  7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `myParcInfo`
--

-- --------------------------------------------------------

--
-- Structure de la table `cheque`
--

CREATE TABLE `cheque` (
  `id` int(10) UNSIGNED NOT NULL,
  `number` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `from` date DEFAULT NULL,
  `in` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `expiration` date DEFAULT NULL,
  `month` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `adress` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `town` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Contenu de la table `cheque`
--

INSERT INTO `cheque` (`id`, `number`, `from`, `in`, `expiration`, `month`, `year`, `firstname`, `adress`, `email`, `town`, `lastname`, `amount`, `phone`, `id_user`, `createdAt`, `updatedAt`) VALUES
(1, '2354235', '2017-03-10', 'Paris', '2017-03-18', NULL, NULL, 'Geoffrey Pierre', '18 rue des graviers', 'leborges.g@gmail.com', 'Neuilly sur seine', 'Le Borgès', 243, '0672153349', 2, '2017-03-02 18:43:48', '2017-03-02 18:43:48');

-- --------------------------------------------------------

--
-- Structure de la table `computer`
--

CREATE TABLE `computer` (
  `id` int(10) UNSIGNED NOT NULL,
  `serial` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `os` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `usage` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `SAV` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `garantie` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `department` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Contenu de la table `computer`
--

INSERT INTO `computer` (`id`, `serial`, `state`, `os`, `usage`, `SAV`, `garantie`, `department`, `createdAt`, `updatedAt`) VALUES
(1, 'SDGDGKDGS', 'Très Bon,', 'Windows 8,', 'Utilisateur,', '0', 'HP,', 1, '2017-03-05 19:38:12', '2017-03-05 19:38:12'),
(2, 'GJGSDGSDGISG', 'Bon,', 'Windows 10,', 'Tests,', '0', 'Apple,', 1, '2017-03-05 19:44:31', '2017-03-05 19:44:31');

-- --------------------------------------------------------

--
-- Structure de la table `department`
--

CREATE TABLE `department` (
  `id` int(10) UNSIGNED NOT NULL,
  `department` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Contenu de la table `department`
--

INSERT INTO `department` (`id`, `department`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'Ile de France', 75, NULL, NULL),
(2, 'Bourgongne', 92, NULL, NULL),
(3, 'Bretagne', NULL, NULL, NULL),
(4, 'Corse', NULL, NULL, NULL),
(5, 'Hauts-de-France', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `sav`
--

CREATE TABLE `sav` (
  `id` int(10) UNSIGNED NOT NULL,
  `foreign_key` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8_swedish_ci DEFAULT NULL,
  `department` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `login`, `password`, `firstname`, `lastname`, `phone`, `mail`, `role`, `department`, `createdAt`, `updatedAt`) VALUES
(1, 'root', '$2a$10$vcYS4e9s0ubJ/1gfFjJHZeX7G7Bm0gzHzKCWUl7RahAiQ7O7WHAbu', 'root', 'root', '0147457280', 'root@msn.com', '1', 2, '2017-03-05 19:14:23', '2017-03-05 19:14:23');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `cheque`
--
ALTER TABLE `cheque`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `number` (`number`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `computer`
--
ALTER TABLE `computer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `serial` (`serial`);

--
-- Index pour la table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `department` (`department`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Index pour la table `sav`
--
ALTER TABLE `sav`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `cheque`
--
ALTER TABLE `cheque`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `computer`
--
ALTER TABLE `computer`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `sav`
--
ALTER TABLE `sav`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
