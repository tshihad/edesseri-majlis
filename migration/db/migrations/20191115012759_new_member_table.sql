
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

DROP TABLE IF EXISTS member CASCADE ;

CREATE TABLE member(
        member_id VARCHAR(100) PRIMARY KEY,
		name VARCHAR(100),
		house_name VARCHAR(100),
		father_name VARCHAR(100),
		ph_number_1 VARCHAR(100) UNIQUE,
		ph_number_2 VARCHAR(100),
		office_ph_number VARCHAR(100),
		uae_home_ph_number VARCHAR(100),
		email VARCHAR(100),
		blood_group VARCHAR(100),
		passport_number VARCHAR(100),
		dob VARCHAR(100),
		job VARCHAR(100),
		comapny_name VARCHAR(100),
		comaany_post_code VARCHAR(100),
		company_area VARCHAR(100),
		company_emirates VARCHAR(100),
		company_institution VARCHAR(100),
		qualification VARCHAR(100),
		job_qualification VARCHAR(100),
		uae_licence_type VARCHAR(100),
		uae_residential VARCHAR(100),
		uae_area VARCHAR(100),
		uae_building VARCHAR(100),
		uae_flatno VARCHAR(100),
		uae_emirate VARCHAR(100),
		is_married VARCHAR(100),
		is_family_near VARCHAR(100),
		no_boys_children INTEGER,
		no_girls_children INTEGER,
		uae_relative VARCHAR(100),
		uae_relative_ph VARCHAR(100),
		uae_relationship VARCHAR(100),
		home_addres VARCHAR(100),
		home_place VARCHAR(100),
		person_to_contact VARCHAR(100),
		person_to_contact_relationship VARCHAR(100),
		home_number VARCHAR(100),
		mahal_number VARCHAR(100),
		date_of_join VARCHAR(100),
		end_date VARCHAR(100),
		status VARCHAR(100),
		note VARCHAR(100),
		image_location VARCHAR(100),
        password VARCHAR(100) NOT NULL
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE IF EXISTS member CASCADE;