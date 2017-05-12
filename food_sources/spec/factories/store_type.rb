FactoryGirl.define do
  factory :store_type do
    name Faker::Company.name.downcase
  end
end
