
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

ALTER TABLE admin ADD COLUMN token VARCHAR(100);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

ALTER TABLE admin DROP COLUMN token;