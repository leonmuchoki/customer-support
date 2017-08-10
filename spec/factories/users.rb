FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@testmail.com" }
    password "password"
  end
end
