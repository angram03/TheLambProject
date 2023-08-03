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
-- CREATE TABLE city_scores (
--   id SERIAL PRIMARY KEY,
--   city_name TEXT NOT NULL,
--   scores JSONB NOT NULL,
--   summary TEXT NOT NULL,
--   -- Add other columns for each info stuff 
--   created_at TIMESTAMP DEFAULT NOW()
-- );
