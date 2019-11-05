
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE subscription(
    id SERIAL,
    member_id VARCHAR(8) REFERENCES member(member_id) NOT NULL,
    fee INTEGER,
    status INTEGER,
    PAID_at DATE
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE subscription CASCADE;