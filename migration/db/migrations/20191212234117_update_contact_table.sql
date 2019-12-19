
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

ALTER TABLE contact DROP COLUMN name;
ALTER TABLE contact ADD COLUMN first_name VARCHAR(200);
ALTER TABLE contact ADD COLUMN last_name VARCHAR(200);
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

ALTER TABLE contact ADD COLUMN name;
ALTER TABLE contact DROP COLUMN first_name;
ALTER TABLE contact DROP COLUMN last_name;