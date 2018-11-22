DROP DATABASE IF EXISTS rovgedb;
CREATE DATABASE rovgedb;

CREATE TABLE rovgedb.projects(
    `name` varchar(500) NOT NULL,
    `description` varchar(500) DEFAULT "" NOT NULL,
    `html_url` varchar(500) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    `homepage` varchar(500) NOT NULL DEFAULT "",
    `language` varchar(500) NOT NULL DEFAULT "",
    `languages_url` varchar(500) NOT NULL,
    PRIMARY KEY (`name`)
);
