CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email)>1),
    password TEXT NOT NULL, 
    created_at  TIMESTAMP DEFAULT NOW()
);
CREATE TABLE users_preference(
    id SERIAL PRIMARY KEY, 
    City TEXT NOT NULL UNIQUE,
    State TEXT NOT NULL,
    Physician BOOLEAN NOT NULL, 
    Software BOOLEAN NOT NULL, 
    Teachers BOOLEAN NOT NULL,
    Fashion BOOLEAN NOT NULL,
    Culinary BOOLEAN NOT NULL, 
    Social_Work BOOLEAN NOT NULL,
    Hobby TEXT NOT NULL,
    Images TEXT NOT NULL
);
CREATE TABLE user_preference(

    user_email TEXT NOT NULL, 
    State TEXT NOT NULL, 
    Industry TEXT NOT NULL, 
    Hobby TEXT NOT NULL, 
    Weather TEXT NOT NULL,
    states text ARRAY, 
    FOREIGN KEY (user_email) REFERENCES users(email)
    

);