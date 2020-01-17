
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
alter table subscription drop column deleted_at;
alter table subscription drop column updated_at;

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

