DROP DATABASE IF EXISTS hobbies;
CREATE DATABASE hobbies;

\c hobbies;

CREATE TABLE hobs (
     ID SERIAL PRIMARY KEY,
     name VARCHAR,
     type VARCHAR,
     isFun INTEGER,
     Description VARCHAR
);

INSERT INTO hobs (name, type, isFun, Description)
    VALUES('flying', 'dangerous', 1, 'Flying like super man');

