DROP TABLE IF EXISTS projects;

CREATE TABLE `projects`(
    `name` varchar(500) NOT NULL,
    `html_url` varchar(500) NOT NULL,
    `description` varchar(500) NOT NULL,
    `languages_url` varchar(500) NOT NULL,
    `homepage` varchar(500) DEFAULT "",
    `language` varchar(500) DEFAULT "",
    PRIMARY KEY (`name`)
);
