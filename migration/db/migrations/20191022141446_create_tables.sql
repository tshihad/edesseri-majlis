
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE member(
    member_id VARCHAR(8) PRIMARY KEY,
    password_hash VARCHAR(200) NOT NULL,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    fathers_name VARCHAR(100) NOT NULL,
    phone_1 VARCHAR(12) NOT NULL,
    phone_2 VARCHAR(12),
    email VARCHAR(100) NOT NULL,
    res_work_place VARCHAR(100) NOT NULL,
    res_company VARCHAR(100) NOT NULL,
    res_work_phone VARCHAR(20) NOT NULL,
    res_address_place VARCHAR(100) NOT NULL,
    res_address_area VARCHAR(100) NOT NULL,
    res_address_state VARCHAR(100) NOT NULL,
    home_place VARCHAR(100) NOT NULL,
    home_post VARCHAR(100) NOT NULL,
    home_district VARCHAR(100) NOT NULL,   
    home_state VARCHAR(100) NOT NULL,
    home_pin VARCHAR(6) NOT NULL,
    home_phone VARCHAR(20) NOT NULL,
    mahal_card_number VARCHAR(20) NOT NULL,
    im_name VARCHAR(100) NOT NULL,
    im_phone_1 VARCHAR(12) NOT NULL,
    im_phone_2 VARCHAR(12),
    im_phone_3 VARCHAR(12),
    photo_localtion VARCHAR(200) UNIQUE
);

CREATE TABLE admin(
    name VARCHAR(50) NOT NULL,
    password_hash VARCHAR(50) NOT NULL
);

CREATE TABLE loan(
    id SERIAL PRIMARY KEY,
    member_id VARCHAR(8) REFERENCES member (member_id) NOT NULL,
    request_amount INTEGER NOT NULL,
    installment INTEGER NOT NULL,
    purpose VARCHAR(500) NOT NULL,
    requset_date DATE NOT NULL,
    g_member_id VARCHAR(8) REFERENCES member (member_id) NOT NULL,
    status VARCHAR(50),
    reason VARCHAR(200),
    office_date DATE,
    notes VARCHAR(200)
);

CREATE TABLE contact_majlis(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    place VARCHAR(100) NOT NULL,
    country  VARCHAR(100) NOT NULL,
    details  VARCHAR(500)

);

CREATE TABLE event_gallery(
    id SERIAL PRIMARY KEY,
    photo_localtion VARCHAR(200) UNIQUE NOT NULL,
    category VARCHAR(20) NOT NULL
);
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE member CASCADE;
DROP TABLE loan CASCADE;
DROP TABLE event_gallery CASCADE;
DROP TABLE admin CASCADE;
DROP TABLE contact_majlis CASCADE;
