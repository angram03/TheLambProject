CREATE TABLE users{
    id SERIAL PRIMARY KEY, 
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email)>1),
    password TEXT NOT NULL, 
    created_at TIMSTAMP DEFAULT NOW()
}