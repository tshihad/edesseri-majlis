
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE subscription(
    id SERIAL,
    member_id VARCHAR(10) REFERENCES member(member_id) NOT NULL,
    sub_year INTEGER,
    sub_month INTEGER,
    sub_amount INTEGER NOT NULL,
    sub_status INTEGER,
    payment_date DATE,
    payment_event VARCHAR(100),
    created_at DATE,
    updated_at DATE,
    deleted_at DATE,
    created_by VARCHAR(100),
    UNIQUE(sub_month,sub_year,member_id)
);
-- ALTER TABLE subscription SET READ WRITE; 
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE subscription CASCADE;