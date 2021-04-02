CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  trackers TEXT[],
  password TEXT NOT NULL
);