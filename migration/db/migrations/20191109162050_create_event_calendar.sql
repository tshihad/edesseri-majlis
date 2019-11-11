
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

CREATE TABLE event_calendar(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    event_date DATE NOT NULL
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE event_calendar CASCADE;
