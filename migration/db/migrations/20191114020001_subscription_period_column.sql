
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
ALTER TABLE subscription ADD COLUMN period INTEGER;

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

ALTER TABLE subscription DROP COLUMN period;

