CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 full_name VARCHAR(255) NOT NULL,
 "user" VARCHAR(50) UNIQUE NOT NULL,
 user_password VARCHAR(255) NOT NULL
);

CREATE TABLE production (
    id SERIAL PRIMARY KEY,
    "type" VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    serial_number VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(255) NOT NULL,
    comment TEXT,
    "date" DATE DEFAULT NOW(),
    user_id INT REFERENCES users(id)
);