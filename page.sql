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
  `csubtitle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'test',
  `imageUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `audioUrl` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `storyId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Page_storyId_fkey` (`storyId`),
  CONSTRAINT `Page_storyId_fkey` FOREIGN KEY (`storyId`) REFERENCES `Story` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Page`
--

LOCK TABLES `Page` WRITE;
/*!40000 ALTER TABLE `Page` DISABLE KEYS */;
INSERT INTO `Page` VALUES 
(1,1,'In the deep blue sea, far away from land, lives Ollie the Orca. Ollie is a cheerful killer whale who loves to splash and play.','在藍色海洋深處，小鯊魚微笑著遊來游去，在探索珊瑚礁的同時向他的魚友打招呼。','1','1','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(2,2,'Ollie lives with a big family called a pod. They swim together, hunt together, and protect each other.','在珊瑚叢中，鯊魚寶寶發現了一個寶箱，微微打開，裡面珠寶閃閃發光。','2','2','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(3,3,"Ollie\'s mother teaches him to hunt. They chase after shiny fish, darting through the sparkling sea.",'奧利的母親教他打獵。他們追逐閃亮的魚，在波光粼粼的大海中穿梭。','3','3','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(4,4,"The ocean is Ollie\'s playground. He loves leaping high above the waves, feeling the splash as he dives back in.",'海洋是奧利的遊樂場。他喜歡在海浪之上高高躍起，感受潛回水中時濺起的水花。','4','4','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(5,5,"Ollie\'s best friend is a playful dolphin named Daisy. They race each other, laughing through the waves.",'奧利最好的朋友是一隻頑皮的海豚，名叫黛西。他們互相比賽，在海浪中歡笑。','5','5','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(6,6,'At night, Ollie listens to the beautiful songs of the humpback whales. The melodies are soothing and mysterious.','晚上，奧利聆聽座頭鯨美妙的歌聲。旋律舒緩而神祕。','6','6','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(7,7,'Ollie explores a bright coral reef. He sees colorful fish and curious sea turtles.','晚上，奧利聆聽座頭鯨美妙的歌聲。旋律舒緩而神祕。','7','7','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(8,8,"Ollie meets a gentle giant - a blue whale. It\'s the biggest animal he has ever seen!",'奧利遇見了溫柔的巨人－藍鯨。這是他見過的最大的動物！','8','8','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(9,9,'Under the starry night sky, Ollie watches the glowing plankton. The sea sparkles like the stars above.','在繁星點點的夜空下，奧利觀察著發光的浮游生物。大海像頭頂的星星一樣閃閃發光。','9','9','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(10,10,"After a day full of adventure, Ollie rests with his pod. They float gently, dreaming of tomorrow\'s fun.",'經過一天的冒險後，奧利在他的家裡休息。他們輕輕地漂浮著，夢想著明天的歡樂。','10','10','2024-01-31 14:13:20.134','2024-01-31 14:13:20.000',1),
(11,1,'Deep in the blue ocean, Baby Shark swam with a smile, greeting his fish friends as he explored the coral reefs.','在藍色海洋深處，小鯊魚微笑著遊來游去，在探索珊瑚礁的同時向他的魚友打招呼。','1','1','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(12,2,'Amidst the corals, Baby Shark found a treasure chest, slightly open, sparkling with jewels.','在珊瑚叢中，鯊魚寶寶發現了一個寶箱，微微打開，裡面珠寶閃閃發光。','2','2','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(13,3,'Near the sea floor, a cheerful turtle glided by, waving to Baby Shark among the seaweed.','在海底附近，一隻快樂的海龜滑過，向海藻中的小鯊魚揮手。','3','3','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(14,4,'A group of colorful fish joined Baby Shark, swimming together in a happy school.','一群色彩繽紛的魚兒加入了小鯊魚的行列，在快樂的學校裡一起游泳。','4','4','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(15,5,'Exploring further, Baby Shark discovered a sunken ship with a curious octopus peeking out.','經過進一步探索，小鯊魚發現了一艘沉船，一隻好奇的章魚正在探出頭來。','5','5','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(16,6,'Playing hide and seek, Baby Shark found a shy seahorse camouflaged among the corals.','在玩捉迷藏時，小鯊魚發現了一隻害羞的海馬隱藏在珊瑚叢中。','6','6','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(17,7,'Overhead, a playful dolphin leaped, splashing water around Baby Shark.','頭頂上，一隻頑皮的海豚跳躍著，在小鯊魚周圍潑水。','7','7','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(18,8,'On the sandy ocean floor, Baby Shark watched a starfish and a crab dancing merrily.','在沙質海底，小鯊魚看到海星和螃蟹在歡快地跳舞。','8','8','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(19,9,'In a clamshell, Baby Shark found a shimmering pearl, glowing softly.','鯊魚寶寶在蛤殼裡發現了一顆閃閃發光的珍珠，發出柔和的光芒。','9','9','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(20,10,'Waving goodbye to his ocean friends, Baby Shark headed back home, his heart full of joy.','與海洋朋友揮手告別，鯊魚寶寶滿懷喜悅地回家了。','10','10','2024-01-31 16:17:47.356','2024-01-31 16:17:47.000',2),
(21,1,'In the quiet town of Starville, where nights are clear and bright, lived a curious child named Alex, dreaming of starry flights.','在安靜的斯塔維爾小鎮，夜晚晴朗明亮，住著一個名叫亞歷克斯的好奇孩子，夢想著星空飛行。','1','1','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(22,2,'Alex dreamed of soaring high, among stars, moons, and suns, exploring the mysteries of space, having tons of fun.','亞歷克斯夢想翱翔在星星、月亮和太陽之間，探索太空的奧秘，享受無窮的樂趣。','2','2','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(23,3,"With cardboard, paint, and lots of tape, Alex built a ship so fine. \'It\'s my spaceship to the stars!\' declared Alex with a shine.",'亞歷克斯用紙板、油漆和大量膠帶，建造了一艘如此精美的船。 “這是我通往星星的太空船！”亞歷克斯閃閃發光地說。','3','3','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(24,4,"Wearing a helmet made of foil, Alex climbed aboard. \'3, 2, 1, Blast off!\' and up the spaceship soared.",'戴著鋁箔紙製成的頭盔，亞歷克斯爬上了車子。 “3、2、1，發射！”太空船騰空而起。','4','4','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(25,5,'First stop, the Moon so bright, with craters deep and wide. Alex hopped in moon boots, exploring side by side.','第一站，月亮如此明亮，隕石坑又深又寬。亞歷克斯穿上月球靴，並肩探索。','5','5','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(26,6,'Then off to Saturn, with rings so grand. Alex danced upon them, a sight quite grand!','然後前往土星，土星環如此宏偉。亞歷克斯在他們身上跳舞，場面相當壯觀！','6','6','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(27,7,'Mars was next, the Red Planet in space. Alex looked for Martians, but found only space.','接下來是火星，太空中的紅色星球。亞歷克斯尋找火星人，但只找到了太空。','7','7','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(28,8,'Through the Milky Way, Alex twirled and spun, in a cosmic ballet, having so much fun.','亞歷克斯在銀河系中旋轉、旋轉，就像一場宇宙芭蕾，玩得很開心。','8','8','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(29,9,"But even in space, adventures must end. \'Time to head home,\' Alex said, \'with memories to tend.",'但即使在太空中，冒險也必須結束。 “是時候回家了，”亞歷克斯說，“帶著回憶去吧。”','9','9','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(30,10,"Back in Starville, under the night sky so clear, Alex smiled softly, \'I\'ll always have the stars near.",'回到斯塔維爾，在如此清澈的夜空下，亞歷克斯輕輕地微笑著，“我會永遠把星星放在身邊。”','10','10','2024-01-31 16:20:25.288','2024-01-31 16:20:25.000',3),
(31,1,'In the cozy town of Kindville, little Ellie learns about home manners.','在舒適的金德維爾小鎮，小艾莉學習家庭禮儀。','1','1','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(32,2,"Ellie knows when she wants a toy, saying \'Please\' brings much joy!",'艾莉知道她什麼時候想要一個玩具，說「請」會帶來很多快樂！','2','2','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(33,3,"When given a treat, Ellie smiles and says, \'Thank You,\' so sweet!",'當他得到小點心，艾莉微笑著說：“謝謝你”，太甜蜜了！','3','3','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(34,4,'Playtime is fun, but cleaning up is also done.','玩耍很有趣，但清理工作也要做。','4','4','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(35,5,'Ellie helps at home, never feeling alone.','艾莉在家幫忙，從不感到孤單。','5','5','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(36,6,'Sharing her toys, Ellie shows she cares, playing fair.','艾莉分享她的玩具，表現出她的關心和公平地玩耍。','6','6','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(37,7,'She speaks with kindness, leaving harsh words behind us.','她說話很友善，把粗魯的話拋在腦後。','7','7','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(38,8,'At dinner, Ellie sits nicely, eating quietly and politely.','晚餐時，艾莉坐得很好，安靜而有禮貌地吃著。','8','8','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(39,9,"Brushing teeth, reading a book, Ellie\'s ready for a bedtime look.",'刷牙，讀故事書，艾莉準備好睡覺。','9','9','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(40,10,'In Kindville, manners shine, with Ellie leading, all is fine!','在金德維爾小鎮，禮儀閃閃發光，有艾莉帶領，一切都很好！','10','10','2024-01-31 16:24:29.116','2024-01-31 16:24:29.000',4),
(41,1,'Good morning, Alex! The sun is up, and a new day begins.','早安，亞歷克斯！太陽升起，新的一天開始了。','1','1','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(42,2,"First, let\'s stretch out big and tall, waking up our body.",'首先，讓我們伸展身體，喚醒我們的身體。','2','2','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(43,3,'Next, Alex heads to the bathroom to brush his teeth and wash his face, staying fresh.','接下來，亞歷克斯前往浴室刷牙洗臉，保持清爽。','3','3','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(44,4,'Then, Alex picks out clothes for the day, neat and pretty.','然後，亞歷克斯挑選當天的衣服，整齊又漂亮。','4','4','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(45,5,'Eat a nutritious breakfast to fuel up for a great day!','吃一頓營養豐富的早餐，為美好的一天補充能量！','5','5','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(46,6,"Don\'t forget the backpack, filled with Alex\'s books and stationery.",'別忘了背包，裡面裝滿了亞歷克斯的書籍和文具。','6','6','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(47,7,'Before leaving, Alex says goodbye to mom and dad with a big hug.','離開前，亞歷克斯用一個大大的擁抱向爸爸媽媽道別。','7','7','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(48,8,'On the way to school, Alex walks with anticipation and curiosity.','在去學校的路上，亞歷克斯帶著期待和好奇心走​​著。','8','8','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(49,9,'At the school gate, Alex greets his friends and they enter the classroom together.','在校門口，Alex向朋友打招呼，然後他們一起走進了教室。','9','9','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(50,10,'Another day full of learning and fun awaits. Are you ready, Alex?','又一個充滿學習和樂趣的一天正在等待著。你準備好了嗎，亞歷克斯？','10','10','2024-01-31 16:26:57.333','2024-01-31 16:26:57.000',5),
(51,1,'In a little town, Mimi and his family decided to start their big spring cleaning before the New Year.','在一個小鎮裡，米米和他的家人決定開始他們的年前大掃除。','1','1','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(52,2,'Their first task was to tidy up the bedrooms. Mimi found his toy car that had been lost for so long.','他們的第一個任務是清理臥室。米米找到了他遺失已久的玩具車。','2','2','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(53,3,'Next, they cleaned the living room. Mimi helped by wiping the windows, letting the sunshine pour in.','接下來，他們清掃客廳。米米幫忙擦窗戶，讓陽光灑進屋內。','3','3','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(54,4,'Then, they moved to the kitchen. Mom taught Mimi how to wash dishes safely.','然後，他們來到廚房。媽媽教米米如何安全地清洗碗碟。','4','4','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(55,5,'In the garden, Mimi helped trim the trees and watered the flowers.','在花園裡，米米幫忙修剪樹木，並澆水給花朵。','5','5','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(56,6,"They also sorted out the attic, discovering some photos from Dad\'s youth.",'他們還整理了閣樓，發現了爸爸年輕時的一些照片。','6','6','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),(57,7,'While organizing the bookshelf, Mimi found his favorite storybook.','整理書架時，米米找到了他最喜歡的故事書。','7','7','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(58,8,'After finishing the cleaning, they donated items they no longer used to those in need.','清掃完畢，他們將不再使用的物品捐給了需要的人。','8','8','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(59,9,'The house was now clean and tidy. Mimi felt very happy and satisfied.','家裡現在乾淨又整潔。米米感到非常開心和滿足。','9','9','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6),
(60,10,'The family sat together in their clean home, enjoying a delicious dinner, ready to welcome the New Year.','他們一家圍坐在乾淨的家中，享受著一頓美味的晚餐，準備迎接新年。','10','10','2024-02-01 16:45:10.800','2024-02-01 16:45:10.000',6);
/*!40000 ALTER TABLE `Page` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-05  9:12:20
