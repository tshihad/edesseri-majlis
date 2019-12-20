
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

ALTER TABLE subscription DROP COLUMN IF EXISTS payment_date ;
ALTER TABLE subscription DROP COLUMN IF EXISTS created_at ;
ALTER TABLE subscription DROP COLUMN IF EXISTS sub_status  ;
ALTER TABLE subscription DROP COLUMN IF EXISTS sub_currency ;


ALTER TABLE subscription ADD COLUMN payment_date  VARCHAR(100);
ALTER TABLE subscription ADD COLUMN created_at   VARCHAR(100);
ALTER TABLE subscription ADD COLUMN sub_currency VARCHAR(100);
ALTER TABLE subscription ADD COLUMN sub_status  VARCHAR(100);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

ALTER TABLE subscription DROP COLUMN payment_date ;
ALTER TABLE subscription DROP COLUMN created_at ;
ALTER TABLE subscription DROP COLUMN sub_status  ;
ALTER TABLE subscription DROP COLUMN sub_currency ;