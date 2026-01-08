CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'tutor')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    essay TEXT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('submitted', 'reviewed', 'completed')),
    score INTEGER CHECK (score >= 0 AND score <= 9),
    feedback TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP
);

CREATE POLICY select_users ON users
    FOR SELECT
    USING (role = 'tutor' OR id = current_setting('app.current_user_id')::integer);

CREATE POLICY select_submissions ON submissions
    FOR SELECT
    USING (user_id = current_setting('app.current_user_id')::integer OR EXISTS (
            SELECT 1
            FROM users
            WHERE id = current_setting('app.current_user_id')::integer AND role = 'tutor'
        ));
