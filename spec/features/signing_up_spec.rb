require "rails_helper"

RSpec.feature "users can sign up", js: true do 
  scenario "with valid details" do 
    visit "/"

    click_link "Sign up"
    fill_in "Email", with: "test@testmail.com"
    fill_in "Password", with: "password"
    click_button "Sign up"

    expect(page).to have_content "You have signed up successfully."
  end
end