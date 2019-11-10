
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

ALTER TABLE event_gallery ADD COLUMN height INTEGER;
ALTER TABLE event_gallery ADD COLUMN width INTEGER;

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

ALTER TABLE event_gallery DROP COLUMN height;
ALTER TABLE event_gallery DROP COLUMN width;

