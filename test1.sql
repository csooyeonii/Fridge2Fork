DROP TABLE IF EXISTS `ingredient`;

CREATE TABLE `ingredient` (
  `name` varchar(255) NOT NULL,
  `ingredientCondition` varchar(255) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `ingredient` WRITE;

INSERT INTO `ingredient` VALUES ('Tomato','Good');
INSERT INTO `ingredient` VALUES ('Cucumber','Good');
INSERT INTO `ingredient` VALUES ('Banana','Good');

UNLOCK TABLES;
