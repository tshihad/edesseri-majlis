-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE member(
    member_id VARCHAR(200) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    house_name VARCHAR(200) NOT NULL,
    father_name VARCHAR(200) NOT NULL,
    ph_number_1 VARCHAR(15) NOT NULL,
    ph_number_2 VARCHAR(15),
    office_ph_number VARCHAR(15),
    uae_home_ph_number VARCHAR(200),
    email VARCHAR(200) NOT NULL,
    blood_group VARCHAR(8),
    passport_number VARCHAR(200) NOT NULL,
    dob VARCHAR(200) NOT NULL,
    job VARCHAR(200) NOT NULL,
    comapny_name VARCHAR(200) NOT NULL,
    company_post_code INTEGER,
    comapny_area VARCHAR(200),
    comapny_emirates VARCHAR(200),
    comapny_institution VARCHAR(200),
    qualification VARCHAR(200) NOT NULL,
    job_qualification VARCHAR(200) NOT NULL,
    uae_licence_type VARCHAR(200),
    uae_residential VARCHAR(200) NOT NULL,
    uae_area VARCHAR(200),
    uae_building VARCHAR(200),
    uae_flatno VARCHAR(200),
    uae_emirate VARCHAR(10),
    is_married VARCHAR(5),
    is_family_near VARCHAR(5),
    no_boys_children INTEGER,
    no_girls_children INTEGER,
    uae_relative VARCHAR(200),
    uae_relative_ph VARCHAR(200),
    uae_relationship VARCHAR(200),
    home_addres VARCHAR(200) NOT NULL,
    home_place VARCHAR(200) NOT NULL,
    person_to_contact VARCHAR(200) NOT NULL,
    person_to_contact_relationship VARCHAR(200) NOT NULL,
    home_number VARCHAR(15) NOT NULL,
    mahal_number VARCHAR(30) NOT NULL,
    image_location VARCHAR(200),
    created_at DATE,
    updated_at DATE,
    password_hash VARCHAR(50) NOT NULL
);

CREATE TABLE admin(
    name VARCHAR(50) NOT NULL,
    password_hash VARCHAR(100) NOT NULL
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

CREATE TABLE contact(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    country VARCHAR(1000) NOT NULL,
    place VARCHAR(100) NOT NULL,
    content VARCHAR(100) NOT NULL,
    created_at DATE,
    updated_at DATE,
    deleted_at DATE
);

CREATE TABLE event_gallery(
    id SERIAL PRIMARY KEY,
    photo_localtion VARCHAR(200) UNIQUE NOT NULL,
    category VARCHAR(20) NOT NULL
);

CREATE TABLE downloads (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    is_public BOOLEAN NOT NULL,
    created_at DATE,
    updated_at DATE,
    deleted_at DATE
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP TABLE member CASCADE;

DROP TABLE loan CASCADE;

DROP TABLE event_gallery CASCADE;

DROP TABLE admin CASCADE;

DROP TABLE contact CASCADE;