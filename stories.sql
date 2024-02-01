-- MySQL dump 10.13  Distrib 5.7.20, for macos10.12 (x86_64)
--
-- Host: localhost    Database: stories
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Page`
--

DROP TABLE IF EXISTS `Page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pageNumber` int(11) NOT NULL,
  `subtitle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `audioUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `storyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Page_storyId_fkey` (`storyId`),
  CONSTRAINT `Page_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Page`
--

LOCK TABLES `Page` WRITE;
/*!40000 ALTER TABLE `Page` DISABLE KEYS */;
INSERT INTO `Page` VALUES (1,1,'In the deep blue sea, far away from land, lives Ollie the Orca. Ollie is a cheerful killer whale who loves to splash and play.','1','1','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(2,2,'Ollie lives with a big family called a pod. They swim together, hunt together, and protect each other.','2','2','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(3,3,'Ollie\'s mother teaches him to hunt. They chase after shiny fish, darting through the sparkling sea.','3','3','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(4,4,'The ocean is Ollie\'s playground. He loves leaping high above the waves, feeling the splash as he dives back in.','4','4','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(5,5,'Ollie\'s best friend is a playful dolphin named Daisy. They race each other, laughing through the waves.','5','5','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(6,6,'At night, Ollie listens to the beautiful songs of the humpback whales. The melodies are soothing and mysterious.','6','6','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(7,7,'Ollie explores a bright coral reef. He sees colorful fish and curious sea turtles.','7','7','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(8,8,'Ollie meets a gentle giant - a blue whale. It\'s the biggest animal he has ever seen!','8','8','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(9,9,'Under the starry night sky, Ollie watches the glowing plankton. The sea sparkles like the stars above.','9','9','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(10,10,'After a day full of adventure, Ollie rests with his pod. They float gently, dreaming of tomorrow\'s fun.','10','10','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),(11,1,'Deep in the blue ocean, Baby Shark swam with a smile, greeting his fish friends as he explored the coral reefs.','1','1','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(12,2,'Amidst the corals, Baby Shark found a treasure chest, slightly open, sparkling with jewels.','2','2','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(13,3,'Near the sea floor, a cheerful turtle glided by, waving to Baby Shark among the seaweed.','3','3','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(14,4,'A group of colorful fish joined Baby Shark, swimming together in a happy school.','4','4','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(15,5,'Exploring further, Baby Shark discovered a sunken ship with a curious octopus peeking out.','5','5','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(16,6,'Playing hide and seek, Baby Shark found a shy seahorse camouflaged among the corals.','6','6','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(17,7,'Overhead, a playful dolphin leaped, splashing water around Baby Shark.','7','7','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(18,8,'On the sandy ocean floor, Baby Shark watched a starfish and a crab dancing merrily.','8','8','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(19,9,'In a clamshell, Baby Shark found a shimmering pearl, glowing softly.','9','9','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(20,10,'Waving goodbye to his ocean friends, Baby Shark headed back home, his heart full of joy.','10','10','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),(21,1,'In the quiet town of Starville, where nights are clear and bright, lived a curious child named Alex, dreaming of starry flights.','1','1','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(22,2,'Alex dreamed of soaring high, among stars, moons, and suns, exploring the mysteries of space, having tons of fun.','2','2','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(23,3,'With cardboard, paint, and lots of tape, Alex built a ship so fine. \'It\'s my spaceship to the stars!\' declared Alex with a shine.','3','3','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(24,4,'Wearing a helmet made of foil, Alex climbed aboard. \'3, 2, 1, Blast off!\' and up the spaceship soared.','4','4','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(25,5,'First stop, the Moon so bright, with craters deep and wide. Alex hopped in moon boots, exploring side by side.','5','5','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(26,6,'Then off to Saturn, with rings so grand. Alex danced upon them, a sight quite grand!','6','6','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(27,7,'Mars was next, the Red Planet in space. Alex looked for Martians, but found only space.','7','7','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(28,8,'Through the Milky Way, Alex twirled and spun, in a cosmic ballet, having so much fun.','8','8','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(29,9,'But even in space, adventures must end. \'Time to head home,\' Alex said, \'with memories to tend.','9','9','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(30,10,'Back in Starville, under the night sky so clear, Alex smiled softly, \'I\'ll always have the stars near.','10','10','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),(31,1,'In the cozy town of Kindville, little Ellie learns about home manners.','1','1','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(32,2,'Ellie knows when she wants a toy, saying \'Please\' brings much joy!','2','2','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(33,3,'When given a treat, Ellie smiles and says, \'Thank You,\' so sweet!','3','3','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(34,4,'Playtime is fun, but cleaning up is also done.','4','4','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(35,5,'Ellie helps at home, never feeling alone.','5','5','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(36,6,'Sharing her toys, Ellie shows she cares, playing fair.','6','6','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(37,7,'She speaks with kindness, leaving harsh words behind us.','7','7','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(38,8,'At dinner, Ellie sits nicely, eating quietly and politely.','8','8','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(39,9,'Brushing teeth, reading a book, Ellie\'s ready for a bedtime look.','9','9','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(40,10,'In Kindville, manners shine, with Ellie leading, all is fine!','10','10','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),(41,1,'Good morning, Alex! The sun is up, and a new day begins.','1','1','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(42,2,'First, let\'s stretch out big and tall, waking up our body.','2','2','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(43,3,'Next, Alex heads to the bathroom to brush his teeth and wash his face, staying fresh.','3','3','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(44,4,'Then, Alex picks out clothes for the day, neat and pretty.','4','4','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(45,5,'Eat a nutritious breakfast to fuel up for a great day!','5','5','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(46,6,'Don\'t forget the backpack, filled with Alex\'s books and stationery.','6','6','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(47,7,'Before leaving, Alex says goodbye to mom and dad with a big hug.','7','7','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(48,8,'On the way to school, Alex walks with anticipation and curiosity.','8','8','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(49,9,'At the school gate, Alex greets his friends and they enter the classroom together.','9','9','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),(50,10,'Another day full of learning and fun awaits. Are you ready, Alex?','10','10','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5);
/*!40000 ALTER TABLE `Page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Story`
--

DROP TABLE IF EXISTS `Story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Story` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Story`
--

LOCK TABLES `Story` WRITE;
/*!40000 ALTER TABLE `Story` DISABLE KEYS */;
INSERT INTO `Story` VALUES (1,'Meet Ollie the Orca','這是關於虎鯨的故事，故事中描述了虎鯨家族的生活習性，如虎鯨媽媽教導小虎鯨獵捕技巧','2024-01-31 03:03:19.492','2024-01-31 03:03:19.492'),(2,'Baby Shark Exploring the Ocean','這是關於鯊魚寶寶的海洋冒險，過從中他認識了海龜、發現了害羞的海馬及海中的沉船和寶藏','2024-01-31 03:07:04.655','2024-01-31 03:07:04.655'),(3,'Journey to the Starry Sky','這是關於 Alex 夢想到外太空的探險故事','2024-01-31 03:10:53.803','2024-01-31 03:10:53.803'),(4,'Ellie\'s Manners Adventure in Kindville','這是故事主要教導小朋友日常生活禮節，如請人幫忙時記得說\'請\', 得到幫助後記得說\'謝謝\'等生活常規','2024-01-31 03:13:25.803','2024-01-31 03:13:25.803'),(5,'Alex\'s School Morning Routine','這是故事主要教導小朋友，上學前所需要準備好的事情，如刷牙、洗臉、穿衣服及和爸媽說再見開心上學','2024-01-31 03:20:36.006','2024-01-31 03:20:36.006');
/*!40000 ALTER TABLE `Story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StoryClick`
--

DROP TABLE IF EXISTS `StoryClick`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `StoryClick` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clicks` int(11) NOT NULL DEFAULT '1',
  `date` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `storyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `StoryClick_storyId_date_key` (`storyId`,`date`),
  CONSTRAINT `StoryClick_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StoryClick`
--

LOCK TABLES `StoryClick` WRITE;
/*!40000 ALTER TABLE `StoryClick` DISABLE KEYS */;
INSERT INTO `StoryClick` VALUES (1,2,'2024-01-31 16:00:00.000',1),(2,1,'2024-01-31 16:00:00.000',3);
/*!40000 ALTER TABLE `StoryClick` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('174d4902-7a00-4049-9043-d665c74d7b50','f8f2ce43145a6daa116232c968bbbd0d59fbd75dfb7bf7b233eca6072523007c','2024-02-01 03:28:24.087','20240201032824_story_click2',NULL,NULL,'2024-02-01 03:28:24.063',1),('26ec93c6-99f5-44e2-872a-d52e2e538d94','8274901f208e978ed560641d803aa86da22abfbba0429a016d315e326dd35693','2024-01-31 02:03:56.024','20240131020355_init',NULL,NULL,'2024-01-31 02:03:55.994',1),('7484710b-7f15-4278-ad46-f57fbdfb6646','7c98e54314e2da48407c32ce9082149cc71dee1dec434087e478a919b8fce24d','2024-02-01 03:07:48.455','20240201030748_story_click',NULL,NULL,'2024-02-01 03:07:48.440',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 13:52:37
