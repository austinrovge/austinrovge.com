DROP TABLE IF EXISTS projects;

CREATE TABLE `projects`(
    `name` varchar(30) NOT NULL,
    `langauge` varchar(30) NOT NULL,
    `description` varchar(30) NOT NULL,
    PRIMARY KEY (`name`)
);

INSERT INTO `projects` VALUES ("test project", "Python", "test description pls ignore");

SELECT * FROM projects;