-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  job VARCHAR(255) NOT NULL,
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Comment on table and columns
COMMENT ON TABLE users IS 'Table to store user information';
COMMENT ON COLUMN users.id IS 'Primary key';
COMMENT ON COLUMN users.name IS 'User full name';
COMMENT ON COLUMN users.email IS 'User email address (unique)';
COMMENT ON COLUMN users.job IS 'User job title or role';
COMMENT ON COLUMN users.avatar IS 'URL to user avatar image';
COMMENT ON COLUMN users.created_at IS 'Timestamp when the user was created';
COMMENT ON COLUMN users.updated_at IS 'Timestamp when the user was last updated'; 