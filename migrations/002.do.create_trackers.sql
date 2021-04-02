CREATE TABLE trackers (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  counter Integer,
  image TEXT,
  trackTime BOOLEAN 
);