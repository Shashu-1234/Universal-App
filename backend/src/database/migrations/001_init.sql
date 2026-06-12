CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS devices (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  manufacturer TEXT NOT NULL,
  model TEXT NOT NULL,
  firmware TEXT NOT NULL,
  protocol TEXT NOT NULL,
  category TEXT NOT NULL,
  security_requirements JSONB NOT NULL DEFAULT '[]'::jsonb,
  pairing_required BOOLEAN NOT NULL DEFAULT FALSE,
  controllability_score INT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS commands (
  id UUID PRIMARY KEY,
  device_id TEXT REFERENCES devices(id) ON DELETE CASCADE,
  command_name TEXT NOT NULL,
  payload_schema JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS remote_schemas (
  id UUID PRIMARY KEY,
  device_id TEXT REFERENCES devices(id) ON DELETE CASCADE,
  schema JSONB NOT NULL,
  version INT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS routines (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  definition JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS preferences (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  favorites JSONB NOT NULL DEFAULT '[]'::jsonb,
  preferred_layout TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS action_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  device_id TEXT REFERENCES devices(id),
  command_name TEXT NOT NULL,
  result TEXT NOT NULL,
  executed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
