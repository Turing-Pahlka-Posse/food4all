FactoryGirl.define do
  factory :store do
    name Faker::Company.name
    address_line1 Faker::Address.street_address
    city Faker::Address.city
    zip Faker::Address.zip
    phone Faker::PhoneNumber.cell_phone
    sic Faker::Number.number(6)
    naics Faker::Number.number(6)
    sales_volume Faker::Number.number(6)
    employees Faker::Number.between(1, 999)
    lat Faker::Address.latitude
    long Faker::Address.longitude
    neighborhood Faker::Address.street_name
    hcsi Faker::TwinPeaks.location
    council_district Faker::HarryPotter.character
    store_type_id store_type
  end
end
