-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 04 déc. 2022 à 05:56
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `masterpatientindex`
--

-- --------------------------------------------------------

--
-- Structure de la table `mpi_patient`
--

DROP TABLE IF EXISTS `mpi_patient`;
CREATE TABLE IF NOT EXISTS `mpi_patient` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `date_naiss` varchar(100) NOT NULL,
  `sexe` varchar(1) NOT NULL,
  `region_origine` varchar(30) NOT NULL,
  `commune_naissance` varchar(30) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `statut_marital` varchar(10) NOT NULL,
  `fonction` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cni` varchar(20) NOT NULL,
  `contact_urgence` varchar(100) NOT NULL,
  `passport` varchar(20) NOT NULL,
  `unique_id` varchar(100) NOT NULL,
  `etranger` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `mpi_patient`
--

INSERT INTO `mpi_patient` (`id`, `nom`, `date_naiss`, `sexe`, `region_origine`, `commune_naissance`, `adresse`, `telephone`, `statut_marital`, `fonction`, `email`, `cni`, `contact_urgence`, `passport`, `unique_id`, `etranger`) VALUES
(2, 'Macintyre Jane			', '7/24/1967', 'M', 'Est', 'Messamena', 'MESSAMENA', '696660677', 'Married mo', 'Private sector employee', '', '', '696660677', '', '', ''),
(3, 'Macintyre Adele', '2/16/1999', 'F', 'Est', 'Mboanz (Angossas)', '(DIBATO) BOUTIQUE D\'IBRAHIM', '660539829', 'Single', 'Unemployed', '', '', '678071470', '', '', ''),
(4, 'Macintyre Abu', '3/11/1993', 'F', 'Est', 'Abong Mbang', '(DIBATO) QUARTIER ADMINISTRATIF', '698088823', 'Single', 'Unemployed', '', '', '695869730', '', '', ''),
(5, 'Macintyre Jet', '3/13/1993', 'M', 'Est', 'Mboanz (Angossas)', '(NDONNANG), A COTE DE LA QUINCAILLERIE YASSEN (DEM', '650437496 / 61201009', 'Co-habitin', 'Labourer', '', '', '650437496', '', '', ''),
(6, 'Manth Roger', '1/1/1982', 'F', 'Centre', 'Ayos', 'NANMEDJAP AYOS (NDONNANG -ATO)', '656982208', 'Co-habitin', 'Private sector employee', '', '', '', '', '', ''),
(7, 'Manth Rennie', '1/1/1996', 'M', 'Est', 'Mboanz (Angossas)', '(DIBATO) ANKOMB', '691110448', 'Single', 'Private sector employee', '', '', '691110448', '', '', ''),
(8, 'Manth Aby', '4/2/1993', 'F', 'Est', 'Abong Mbang', '(NDONNANG) MBAM EWONDO', '677935820', 'Single', 'Vendor', '', '', '661934155', '', '', ''),
(9, 'Manth Gayle', '3/24/1997', 'M', 'Est', '', 'ESSENG', '665112873', 'Single', 'Driver', '', '', '663498364', '', '', ''),
(10, 'Manth Gabbie', '4/24/1981', 'F', 'Est', 'Abong-MBang', 'QUATIER NYONG', '693151550', 'Co-habitin', 'Private sector employee', '', '', '', '', '', ''),
(11, 'Manth Ramy', '1/28/1981', 'F', 'Est', 'ABONG-MBANG', '(DIBATO) ABONG-MBANG PLATEAU APRES LA BOULANGERIE', '693224443/650811531', 'Co-habitin', 'Unemployed', '', '', '671049166', '', '', ''),
(12, 'Yellow James', '1/28/1981', 'F', 'Est', 'ABONG-MBANG', '(DIBATO) ABONG-MBANG PLATEAU APRES LA BOULANGERIE', '693224443/650811531', 'Co-habitin', 'Unemployed', '', '', '671049166', '', '', ''),
(13, 'Ramula	Agenio', '10/4/1973', 'M', 'Est', 'Abong Mbang', '(BERGER) AQUARTIER PLATEAU', '671049164', 'Co-habitin', 'Driver', '', '', '693224443', '', '', ''),
(14, 'Badman Bolo', '10/4/1973', 'M', 'Est', 'Abong Mbang', '(BERGER) AQUARTIER PLATEAU', '671049164', 'Co-habitin', 'Driver', '', '', '693224443', '', '', ''),
(15, 'Yellow	Uij', '1/1/2001', 'F', 'Est', 'Abong Mbang', 'BERGER', '693318154', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(16, 'Yellow	Jomi', '1/1/2001', 'F', 'Est', 'Abong Mbang', 'BERGER', '693318154', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(17, 'Ramula	Rosario', '5/19/1975', 'M', 'Est', '', 'MBAMA (DIBATO)', '', 'Married mo', 'Housewife', '', '', '', '', '', ''),
(18, 'Bonjorna Jono', '5/19/1975', 'M', 'Est', '', 'MBAMA (DIBATO)', '', 'Married mo', 'Housewife', '', '', '', '', '', ''),
(19, 'Labunda Agy', '1/1/1978', 'M', 'Est', 'Messamena', '(DIBATO) MBAMA', '', 'Single', '', '', '', '', '', '', ''),
(20, 'Bonjorna Rab', '1/1/1978', 'M', 'Est', 'Messamena', '(DIBATO) MBAMA', '', 'Single', '', '', '', '', '', '', ''),
(21, 'Labunda Obinoal', '12/25/1958', 'F', 'Est', 'Abong Mbang', '(CSC)', '', 'Widow(er)', 'Labourer', '', '', '', '', '', ''),
(22, 'Bonjorna Ojhi', '7/6/1992', 'F', 'Est', 'NGUELEMENDOUKA', '(DIBATO) QUARTIER TCHOLOU', '697148128', 'Single', 'Civil Servant', '', '', '657619388', '', '', ''),
(23, 'Lathuro	Jono', '1/1/1970', 'F', 'Est', 'LOMIE', 'NGOILA', '690250563', 'Co-habitin', 'Vendor', '', '', '690250563', '', '', ''),
(24, 'Shan Xiao', '3/23/1980', 'F', 'Est', '', '(NDONNANG) QUATIER MAKA', '690969026', 'Single', 'Unemployed', '', '', '698944423', '', '', ''),
(25, 'Barumida Filsen', '5/5/1992', 'M', 'Est', '', '( Auto Transf OUT) CHEFFERIE ETCHEK apres FORAGE 1', '696129627', 'Co-habitin', '', '', '', '', '', '', ''),
(26, 'Lathuro	Jack', '5/1/1991', 'M', 'Est', 'Abong Mbang', '(NDONNANG)', '655237041', 'Single', 'Unemployed', '', '', '655237041', '', '', ''),
(27, 'Lathuro	Lebin', '11/22/1994', 'F', 'Est', 'Abong Mbang', '(DIBATO) QUARTIER NYONG', '655076707', 'Single', 'Student', '', '', '', '', '', ''),
(28, 'Leboven Age', '5/1/1991', 'M', 'Est', 'Abong Mbang', '(NDONNANG)', '655237041', 'Single', 'Unemployed', '', '', '655237041', '', '', ''),
(29, 'Lathuro	Jeo', '1/1/1994', 'F', 'Est', 'Abong Mbang', 'DIBATO DJOW', '650524785', 'Single', 'Civil Servant', '', '', '', '', '', ''),
(30, 'Shan Xum', '1/1/1994', 'F', 'Est', 'Abong Mbang', 'DIBATO DJOW', '650524785', 'Single', 'Civil Servant', '', '', '', '', '', ''),
(31, 'Shan Xiao Lun', '9/25/2000', 'F', 'Est', 'Abong Mbang', 'NYONG (BERGER)', '673512728', 'Single', 'Vendor', '', '', '', '', '', ''),
(32, 'Lewis Tetra', '8/19/1981', 'M', 'Est', 'Abong Mbang', '(BERGER) QUARTIER BAMI', '661314869', 'Married mo', 'Vendor', '', '', '', '', '', ''),
(33, 'Jobolocy Acloby', '8/19/1981', 'M', 'Est', 'Abong Mbang', '(BERGER) QUARTIER BAMI', '661314869', 'Married mo', 'Vendor', '', '', '', '', '', ''),
(34, 'Listy Agen', '1/1/1978', 'F', 'Est', 'Abong Mbang', '(DIBATO) DJOW', '657661411', 'Married po', 'Vendor', '', '', '695257666', '', '', ''),
(35, 'Oberjine Zula', '6/17/1978', 'M', 'Est', 'Abong Mbang', 'LOMIE,EKOM,HOTEL RAFIA,MAISON EN BLANCHE AU CARREF', '659090472', 'Co-habitin', 'Private sector employee', '', '', '659090472', '', '', ''),
(36, 'Tetra Alon', '6/17/1978', 'M', 'Est', 'Abong Mbang', 'LOMIE,EKOM,HOTEL RAFIA,MAISON EN BLANCHE AU CARREF', '659090472', 'Co-habitin', 'Private sector employee', '', '', '659090472', '', '', ''),
(37, 'Tetra Zeal', '5/12/1956', 'F', 'Est', 'ABON', 'BERGER', '695778824', '', '', '', '', '', '', '', ''),
(38, 'Listy Baigan', '6/25/1975', 'F', 'Est', 'Dja (Mindourou)', '(DIBATO) NKOUAK', '663322998', 'Single', 'Housewife', '', '', '', '', '', ''),
(39, 'Listy Joseph', '5/12/1956', 'F', 'Est', 'ABON', 'BERGER', '695778824', '', '', '', '', '', '', '', ''),
(40, 'Listy Lidsey', '2/13/1976', 'F', 'Est', 'Abong Mbang', '(DIBATO) NKOUM APRES L\'ECOLE A GAUCHE', '650553324 / 69757768', 'Co-habitin', 'Housewife', '', '', '', '', '', ''),
(41, 'Chakalio Alo', '9/22/1985', 'F', 'Est', 'Abong Mbang', 'BERGER', '696837286', 'Co-habitin', 'Private sector employee', '', '', '', '', '', ''),
(42, 'Chakalio Debonoir', '1/1/1999', 'M', 'Est', 'Abong Mbang', 'BERGER', '', '', 'Unemployed', '', '', '', '', '', ''),
(43, 'Chakalio Aden', '1/1/1994', 'M', 'Est', 'Bebend (Atok)', 'MEKOAGUE (DIBATO)', '661691997', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(44, 'Nonino	Ageni', '1/1/1973', 'F', 'Est', 'Abong Mbang', '(BERGER) DJEGLASSI', '696474613', 'Married mo', 'Unemployed', '', '', '696474613', '', '', ''),
(45, 'Ilina Ethu', '1/1/1972', 'M', 'Est', 'Abong Mbang', '(BERGER) DJEGLASSI', '696474613', 'Married mo', 'Unemployed', '', '', '696474613', '', '', ''),
(46, 'Chakalio Zuia', '1/1/1972', 'M', 'Est', 'Abong Mbang', '(BERGER) DJEGLASSI', '696474613', 'Married mo', 'Unemployed', '', '', '696474613', '', '', ''),
(47, 'Ilina Doni', '10/30/2003', 'F', 'Est', 'Abong Mbang', 'MBOULE', '', 'Co-habitin', 'Student', '', '', '', '', '', ''),
(48, 'Jeremiah Joseph', '9/27/1991', 'F', 'Est', 'Abong Mbang', '(DIBATO) SOURIS', '679359600', 'Single', 'Unemployed', '', '', '698285695', '', '', ''),
(49, 'Jorrison Manny', '4/18/1996', 'F', 'Est', 'Abong Mbang', '(DIBATO) MPEMZOK', '696607094', 'Co-habitin', 'Unemployed', '', '', '696607094', '', '', ''),
(50, 'Jeremiah Olina', '9/27/1991', 'F', 'Est', 'Abong Mbang', '(DIBATO) SOURIS', '679359600', 'Single', 'Unemployed', '', '', '698285695', '', '', ''),
(51, 'Jeremiah Jane', '1/1/1992', 'F', 'Est', 'Abong Mbang', '(NDONNANG) DJOW', '', 'Single', '', '', '', '', '', '', ''),
(52, 'Jeremiah Obui', '1/1/1992', 'F', 'Est', 'Abong Mbang', 'DJOW', '', 'Single', 'Unemployed', '', '', '', '', '', ''),
(53, 'Jorrison Veny', '1/1/1992', 'F', 'Est', 'Abong Mbang', '(NDONNANG) DJOW', '', 'Single', '', '', '', '', '', '', ''),
(54, 'Nathan	Kobi', '5/5/1976', 'M', 'Est', 'Abong Mbang', 'DIBATO', '696607094', 'Co-habitin', 'Civil Servant', '', '', '696607094', '', '', ''),
(55, 'Nathan	Rany', '6/26/1987', 'M', 'Est', 'Bertoua II', '(NDONNANG -TO) KOLOMIN', '663397345', 'Married mo', 'Vendor', '', '', '', '', '', ''),
(56, 'Nathan	Jany', '6/26/1987', 'M', 'Est', 'Bertoua II', '(NDONNANG -TO) KOLOMIN', '663397345', 'Married mo', 'Vendor', '', '', '', '', '', ''),
(57, 'Nathan	Jody', '1/1/1998', 'F', 'Est', 'ABONG MBANG', 'DIBATO MISSOUME', '663322998', 'Single', 'Unemployed', '', '', '', '', '', ''),
(58, 'Duby Zuby', '1/1/1994', 'F', 'Est', 'Abong Mbang', '(NDONNANG -REFUS) MISSOUME', '', 'Married mo', 'Unemployed', '', '', '', '', '', ''),
(59, 'Duby Jane', '1/1/1994', 'F', 'Est', 'Abong Mbang', '(NDONNANG -REFUS) MISSOUME', '', 'Married mo', 'Unemployed', '', '', '', '', '', ''),
(60, 'Duby Olia', '1/1/2005', 'F', 'Est', 'Abong Mbang', '(NDONNANG -REFUS)  MISSOUME', '', 'Married mo', 'Unemployed', '', '', '', '', '', ''),
(61, 'Macintyre Joseph', '1/1/2005', 'F', 'Est', 'Abong Mbang', '(NDONNANG -REFUS)  MISSOUME', '', 'Married mo', 'Unemployed', '', '', '', '', '', ''),
(62, 'Macintyre Jane', '1/1/1994', 'F', 'Est', 'Abong Mbang', '(BERGER)  A COTE DE LA CHEFFERIE DU 3E DEGRE DE NT', '698368917', 'Married mo', 'Unemployed', '', '', '', '', '', ''),
(63, 'Macintyre Joseph', '1/1/1994', 'F', 'Est', 'Abong Mbang', '(BERGER)  A COTE DE LA CHEFFERIE DU 3E DEGRE DE NT', '698368917', 'Married mo', 'Unemployed', '', '', '', '', '', ''),
(64, 'Macintyre Joseph', '1/1/1953', 'F', 'Est', 'Bebend (Atok)', '(DIBATO) AU NIVEAU DU SANCTUAIRE MISSION CATHOLIQU', '', 'Single', 'Unemployed', '', '', '677335236', '', '', ''),
(65, 'Macintyre Joseph', '1/1/1953', 'F', 'Est', 'Bebend (Atok)', '(DIBATO) AU NIVEAU DU SANCTUAIRE MISSION CATHOLIQU', '', 'Single', 'Unemployed', '', '', '677335236', '', '', ''),
(66, 'Manth Aby', '2/20/1999', 'F', 'Est', 'Mboma', '(NDONNANG) CHEZ LE CHEF DE FAMILLE NANG ETIENNE', '', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(67, 'Manth Rennie', '2/20/1999', 'F', 'Est', 'Mboma', '(NDONNANG) CHEZ LE CHEF DE FAMILLE NANG ETIENNE', '', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(68, 'Manth Roger', '11/26/1996', 'F', 'Est', 'Mboanz (Angossas)', 'ESSENG II', '661480742', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(69, 'Manth Gayle', '11/26/1996', 'F', 'Est', 'Mboanz (Angossas)', 'ESSENG II', '661480742', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(70, 'Manth Ramy', '7/30/1999', 'M', 'Centre', 'Nyakokombo (Kobdombo)', '(ESSENG) FANG-BILOUN', '660339877', 'Single', 'Businessman', '', '', '690800377', '', '', ''),
(71, 'Manth Gabbie', '7/30/1999', 'M', 'Centre', 'Nyakokombo (Kobdombo)', '(ESSENG) FANG-BILOUN', '660339877', 'Single', 'Businessman', '', '', '690800377', '', '', ''),
(72, 'Macintyre Joseph', '3/8/1999', 'F', 'Est', 'Abong Mbang', 'ABONDOUM', '695816248', 'Co-habitin', 'Private sector employee', '', '', '', '', '', ''),
(73, 'Macintyre Jet', '3/8/1999', 'F', 'Est', 'Abong Mbang', 'ABONDOUM', '695816248', 'Co-habitin', 'Private sector employee', '', '', '', '', '', ''),
(74, 'Macintyre Abu', '12/1/1993', 'F', 'Est', 'Abong Mbang', 'ABONG-MBANG ,EN FACE DE LA BICEC', '678996462', 'Single', 'Unemployed', '', '', '', '', '', ''),
(75, 'Macintyre Jane', '12/1/1993', 'F', 'Est', 'Abong Mbang', 'ABONG-MBANG ,EN FACE DE LA BICEC', '678996462', 'Single', 'Unemployed', '', '', '', '', '', ''),
(76, 'Macintyre Adele', '3/1/1992', 'F', 'Est', 'Abong Mbang', 'DIBATO ABONG MBANG,OBOW', '681256469', 'Widow(er)', 'Vendor', '', '', '', '', '', ''),
(77, 'Yellow James', '3/1/1992', 'F', 'Est', 'Abong Mbang', 'DIBATO ABONG MBANG,OBOW', '681256469', 'Widow(er)', 'Vendor', '', '', '', '', '', ''),
(78, 'Yellow Uij', '1/20/1980', 'M', 'Est', 'Mboanz (Angossas)', '(ESSENG)', '660355728 / 66400969', 'Co-habitin', 'Unemployed', '', '', '663247568', '', '', ''),
(79, 'Yellow Jomi', '1/20/1980', 'M', 'Est', 'Mboanz (Angossas)', '(ESSENG)', '660355728 / 66400969', 'Co-habitin', 'Unemployed', '', '', '663247568', '', '', ''),
(80, 'Ramula Agenio', '1/1/2006', 'M', 'Est', 'Mboanz (Angossas)', 'ESSENG', '', 'Single', 'Student', '', '', '', '', '', ''),
(81, 'Ramula	Rosario	', '1/1/2006', 'M', 'Est', 'Mboanz (Angossas)', 'ESSENG', '', 'Single', 'Student', '', '', '', '', '', ''),
(82, 'Bonjorna Jono', '8/8/1999', 'F', 'Est', 'Mboanz (Angossas)', '(PTME-ESSENG)', '664009742', 'Single', 'Housewife', '', '', '', '', '', ''),
(83, 'Bonjorna Rab Ramula Agenio', '8/8/1999', 'F', 'Est', 'Mboanz (Angossas)', '(PTME-ESSENG)', '664009742', 'Single', 'Housewife', '', '', '', '', '', ''),
(84, 'Bonjorna Ojhi Ramula Rosario', '2/14/1996', 'M', 'Est', 'Abong Mbang', 'DIBATO', '690398787', 'Single', 'Student', '', '', '', '', '', ''),
(85, 'Labunda Agy Bonjorna Jono', '2/14/1996', 'M', 'Est', 'Abong Mbang', 'DIBATO', '690398787', 'Single', 'Student', '', '', '', '', '', ''),
(86, 'Labunda Obinoal ', '6/14/1981', 'F', 'Est', 'Abong Mbang', 'DIBATO ABONG MBANG, MBOULE I', '695180664', 'Co-habitin', 'Vendor', '', '', '695298925', '', '', ''),
(87, 'Lathuro	Jono Bonjorna Ojhi', '6/14/1981', 'F', 'Est', 'Abong Mbang', 'DIBATO ABONG MBANG, MBOULE I', '695180664', 'Co-habitin', 'Vendor', '', '', '695298925', '', '', ''),
(88, 'Lathuro	Jack Labunda Agy', '2/11/1983', 'F', 'Est', 'Abong Mbang', 'DIBATO', '694687023', 'Widow(er)', 'Housewife', '', '', '666049615', '', '', ''),
(89, 'Lathuro	Lebin', '2/11/1983', 'F', 'Est', 'Abong Mbang', 'DIBATO', '694687023', 'Widow(er)', 'Housewife', '', '', '666049615', '', '', ''),
(90, 'Leboven Age', '2/14/1992', 'F', 'Est', 'Abong Mbang', 'DJOW (DIBATO)', '694533015/655366444', 'Single', 'Unemployed', '', '', '659049957', '', '', ''),
(91, 'Lathuro  Jeo', '2/14/1992', 'F', 'Est', 'Abong Mbang', 'DJOW (DIBATO)', '694533015/655366444', 'Single', 'Unemployed', '', '', '659049957', '', '', ''),
(92, 'Shan Xiao', '1/1/2003', 'F', 'Est', 'Abong Mbang', 'DIBATO ABONG MBANG, SOURIS', '677611440', 'Single', 'Student', '', '', '677611440', '', '', ''),
(93, 'Shan Xum', '1/1/2003', 'F', 'Est', 'Abong Mbang', 'DIBATO ABONG MBANG, SOURIS', '677611440', 'Single', 'Student', '', '', '677611440', '', '', ''),
(94, 'Shan Xiao Lun', '4/24/1988', 'F', 'Est', 'Abong Mbang', '(NDONNANG) NGOULMAKON', '651181461', 'Married mo', 'Housewife', '', '', '', '', '', ''),
(95, 'Barumida Filsen', '4/24/1988', 'F', 'Est', 'Abong Mbang', '(NDONNANG) NGOULMAKON', '651181461', 'Married mo', 'Housewife', '', '', '', '', '', ''),
(96, 'Tetra Alon', '5/20/1973', 'M', 'Est', 'Abong Mbang', '(NDONNANG) ANDJOU', '', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(97, 'Lewis Tetra', '5/20/1973', 'M', 'Est', 'Abong Mbang', '(NDONNANG) ANDJOU', '', 'Co-habitin', 'Unemployed', '', '', '', '', '', ''),
(98, 'Tetra Zeal', '1/1/1952', 'F', 'Est', 'Abong Mbang', '(NDONNANG) NGOMDOUMA', 'S/C 683850624', 'Widow(er)', 'Unemployed', '', '', '693850624', '', '', ''),
(99, 'Jorrison Manny', '1/1/1952', 'F', 'Est', 'Abong Mbang', '(NDONNANG) NGOMDOUMA', 'S/C 683850624', 'Widow(er)', 'Unemployed', '', '', '693850624', '', '', ''),
(100, 'Jeremiah Joseph', '11/7/1961', 'F', 'Est', 'Messamena', 'BRIANT', '696693924/656689654', 'Widow(er)', 'Unemployed', '', '', '676006737', '', '', ''),
(101, 'Jeremiah Olina', '5/1/1988', 'M', 'Est', 'Abong Mbang', '(DIBATO) A 100m Apres lecole dagriculture (DIBATO)', '663381620', '', 'Labourer', '', '', '660835552', '', '', ''),
(102, 'Jeremiah Jane', '12/4/1966', 'F', 'Est', 'Bebend (Atok)', '(CSC) KODJANS', '', 'Co-habitin', 'Housewife', '', '', '', '', '', ''),
(103, 'Jeremiah Obui', '12/4/1976', 'F', 'Est', 'Dja (Mindourou)', 'EMERENCE', '657876935', 'Single', 'Vendor', '', '', '666043135', '', '', ''),
(104, 'Ilina Ethu', '4/8/1980', 'F', 'Est', 'Bebend (Atok)', '(MOLLO) MINKOAGUE', '673553873 / 66491136', 'Single', 'Vendor', '', '', '', '', '', ''),
(105, 'Ilina Doni', '1/1/1986', 'F', 'Est', 'Abong Mbang', '(NDONNANG) NONGBALLA', '', 'Single', 'Unemployed', '', '', '', '', '', ''),
(106, 'Nonino	 Ageni', '9/2/1973', 'M', 'Est', '', '(MOLLO) TONKLA', '697035827', 'Married mo', 'Civil Servant', '', '', '693357440', '', '', ''),
(107, 'Chakalio Alo', '9/10/1979', 'M', 'Est', 'Messamena', '(FORTUNE) KODJANS', '696122361', 'Co-habitin', 'Unemployed', '', '', '661000917', '', '', ''),
(108, 'Chakalio Debonoir', '1/1/1962', 'F', 'Est', 'Messamena', '(NELIE) MBOUMO', '698683836', 'Widow(er)', 'Unemployed', '', '', '698683836', '', '', ''),
(109, 'Chakalio Aden', '8/23/1974', 'F', 'Est', 'Abong Mbang', '(NELIE) MBOULE', '693318154', 'Single', 'Housewife', '', '', '', '', '', ''),
(110, 'Chakalio Zuia', '3/8/1987', 'F', 'Est', 'Abong Mbang', '(Nelie) MADOUMA', '', '', 'Unemployed', '', '', '698012524', '', '', ''),
(111, 'Listy Agen', '1/10/1999', 'M', 'Est', 'Abong Mbang', 'OBC-PRISON (quartier plateau)', '', 'Single', 'Unemployed', '', '', '678408137', '', '', ''),
(112, 'Listy Baigan', '5/20/1988', 'M', 'Est', 'Abong Mbang', '(MOLLO) MINDOUROU, MAYANG, FACE FOYER', '656697291', 'Co-habitin', 'Unemployed', '', '', '691114892', '', '', ''),
(113, 'Listy Joseph', '1/1/1966', 'F', 'Est', 'Abong Mbang', 'CSC', '657335601', 'Co-habitin', 'Unemployed', '', '', '657335601', '', '', ''),
(114, 'Listy Lidsey', '1/1/1982', 'F', 'Est', 'ABONG MBANG', 'ABONG MBANG, MAYOS', '661123152', 'Co-habitin', 'Unemployed', '', '', '661123157', '', '', ''),
(115, 'Jobolocy Acloby', '6/10/1988', 'F', 'Est', 'ABONG MBANG', '(MOLLO) ABONG MBANG, MBOULE', '696718706', 'Single', 'Private sector employee', '', '', '690182542', '', '', ''),
(116, 'Badman Bolo', '1/1/1990', 'F', 'Est', 'Abong Mbang', 'MBOULE II (BERGER)', 's/c 670608011', 'Single', 'Unemployed', '', '', 'KENFACK VERONIQUE', '', '', ''),
(117, 'Oberjine Zula', '5/23/1982', 'F', 'Est', 'ABONG MBANG', 'BERGER', '673289958', 'Widow(er)', 'Vendor', '', '', '', '', '', ''),
(118, 'Nathan	Kobi', '5/23/1982', 'F', 'Est', 'ABONG MBANG', 'BERGER', '673289958', 'Widow(er)', 'Vendor', '', '', '', '', '', ''),
(119, 'Nathan	Rany', '1/1/2002', 'F', 'Est', 'Mboanz (Angossas)', '(ESSENG) KOUMBOU', '661410143', 'Single', 'Housewife', '', '', '', '', '', ''),
(120, 'Nathan	Jany', '1/1/1985', 'M', 'Est', 'Mboanz (Angossas)', '(ESSENG) KOUMBOU', '661410143 /661842490', 'Single', '', '', '', '', '', '', ''),
(121, 'Nathan	Jody', '1/1/1961', 'F', 'Est', 'Abong Mbang', '(ESSENG), NGONDO', '', 'Widow(er)', 'Housewife', '', '', '', '', '', ''),
(122, 'Duby Zuby', '1/1/2014', 'M', 'Est', 'Bebend (Atok)', 'PEDIATRIE (NGUEMETAK Chefferie)', '667246425', '', '', '', '', '', '', '', ''),
(123, 'Duby Jane', '5/20/1980', 'F', 'Est', 'Abong Mbang', '(MOLLO) DERRIERE LE DEUXIEME CARREFOUR DU BAR LAMA', '694797338', 'Single', 'Unemployed', '', '', '694805379', '', '', ''),
(124, 'Duby Olia', '2/14/1984', 'M', 'Est', 'Doume', '(MOLLO) MAMPANG', '697140317', 'Married mo', 'Private sector employee', '', '', '699033343', '', '', ''),
(125, 'Jorrison Veny', '2/14/1984', 'M', 'Est', 'Doume', '(MOLLO) MAMPANG', '697140317', 'Married mo', 'Private sector employee', '', '', '699033343', '', '', ''),
(126, 'Insuree Test', '5/9/1981', 'F', 'Est', 'Abong Mbang', '(PTME) ABONG MBANG PLATEAU', '655237041', 'Widow(er)', 'Unemployed', '', '', '698039305', '', '', ''),
(127, 'Man Test', '4/26/1987', 'F', 'Est', 'Abong Mbang', 'PTME', '693318154/671820152', 'Single', 'Civil Servant', '', '', '677393154', '', '', ''),
(128, 'Woman Test', '1/1/1999', 'F', 'Est', 'Abong Mbang', 'PTME', '676908019 / 68227913', 'Co-habitin', 'Housewife', '', '', '676908019', '', '', ''),
(129, 'Insuree	 Test', '1/17/1992', 'F', 'Est', 'Abong Mbang', '(NELIE) NYONG', '655293329', 'Single', 'Vendor', '', '', '674369362', '', '', ''),
(130, 'Woman Test', '1/1/1958', 'F', 'Est', 'Bebend (Atok)', 'OBC', '694227217', 'Widow(er)', '', '', '', '', '', '', ''),
(131, 'Man Test', '1/1/1958', 'F', 'Est', 'Bebend (Atok)', 'OBC', '694227217', 'Widow(er)', '', '', '', '', '', '', ''),
(132, 'arafat ahmed', '1/1/1976', 'F', 'Est', 'Abong Mbang', 'BRIANT', '650430517', 'Single', 'Labourer', '', '', '', '', '', ''),
(133, 'arafa hoda', '1/1/1976', 'F', 'Est', 'Abong Mbang', 'BRIANT', '650430517', 'Single', 'Labourer', '', '', '', '', '', ''),
(134, 'arafat mona', '1/1/1989', 'F', 'Est', 'Abong Mbang', '(OBC)', '694733474', 'Single', 'Student', '', '', '', '', '', ''),
(135, 'arafa ahmed', '4/30/1996', 'F', 'Est', 'Abong Mbang', 'BERGER', '691129037', '', '', '', '', '', '', '', ''),
(136, 'Family Test', '4/7/1987', 'F', 'Est', 'Lomie', 'ELISABETH', '693311160', '', 'Housewife', '', '', '', '', '', ''),
(137, 'Family Son', '1/1/1977', 'F', 'Est', 'Abong Mbang', '(MARIE) MPEMZOK', '699788075', 'Married mo', 'Unemployed', '', '', '696388965', '', '', ''),
(138, 'Family Father', '3/25/1966', 'M', 'Est', 'Abong Mbang', '(NELIE) NTINDA', '677654675', 'Co-habitin', '', '', '', '', '', '', ''),
(139, 'arafat mona', '3/25/1966', 'M', 'Est', 'Abong Mbang', '(NELIE) NTINDA', '677654675', 'Co-habitin', '', '', '', '', '', '', ''),
(140, 'arafa hoda', '6/24/1991', 'M', 'Est', 'Abong Mbang', 'NDONNANG', '', 'Co-habitin', 'Unemployed', '', '', '668427405', '', '', ''),
(141, 'arafat ahmed', '10/27/2015', 'F', 'Est', 'Abong Mbang', '(PEDIATRIE -PDV plusieurs mois) NTOLOCK', '693318154', 'Single', 'Unemployed', '', '', '', '', '', ''),
(142, 'Family Son', '1/11/1968', 'F', 'Est', 'Abong Mbang', 'ELISABETH', '66572403', 'Co-habitin', 'Unemployed', '', '', '66572403', '', '', ''),
(143, 'Family	Father			', '5/4/1989', 'M', 'Est', 'Abong Mbang', 'DIBATO', '693419264', 'Single', 'Student', '', '', '662128848', '', '', ''),
(144, 'Family 	Test			', '7/22/1972', 'F', 'Est', 'Abong Mbang', '(DIBATO)', '', 'Widow(er)', 'Vendor', '', '', '', '', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
