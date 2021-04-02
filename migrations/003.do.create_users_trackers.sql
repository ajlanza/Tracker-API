CREATE TABLE users_trackers (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id),
  tracker_id uuid REFERENCES trackers(id)
);