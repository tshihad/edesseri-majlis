
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

CREATE TABLE welfare(
    id SERIAL PRIMARY KEY,
    member_id VARCHAR(10) REFERENCES member(member_id) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    amount INTEGER NOT NULL,
    currency VARCHAR(10) NOT NULL,
    welfare_date DATE NOT NULL,
    created_at DATE,
    updated_at DATE,
    deleted_at DATE
);
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE welfare CASCADE;