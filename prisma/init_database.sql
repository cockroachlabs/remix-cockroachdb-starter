CREATE DATABASE IF NOT EXISTS remix_cockroachdb_starter;

USE remix_cockroachdb_starter;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  username STRING UNIQUE NOT NULL,
  password_hash STRING NOT NULL
);
