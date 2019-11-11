
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

ALTER TABLE downloads ADD column location VARCHAR(500) NOT NULL;
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

ALTER TABLE downloads DROP column location;