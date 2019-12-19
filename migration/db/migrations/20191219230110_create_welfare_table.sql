-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE welfare_scheme (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(100),
    nature VARCHAR(50),
    type VARCHAR(50),
    mode VARCHAR(50),
    status VARCHAR(50)
);

CREATE TABLE welfare_campaign (
    id SERIAL PRIMARY KEY,
    campaign_code VARCHAR(50) REFERENCES welfare_scheme(code) NOT NULL,
    welfare_code VARCHAR(50) NOT NULL,
    fiscal_period INTEGER NOT NULL,
    start_date DATE,
    end_date DATE,
    state VARCHAR(50),
    campaign_note VARCHAR(200)
);

CREATE TABLE welfare_collection (
    id SERIAL PRIMARY KEY,
    member_id VARCHAR(200) REFERENCES member(member_id) NOT NULL,
    amount INTEGER NOT NULL
);
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP TABLE welfare_scheme CASCADE;
DROP TABLE welfare CASCADE;
DROP TABLE welfare_collection CASCADE;