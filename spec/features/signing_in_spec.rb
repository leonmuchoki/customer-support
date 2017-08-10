require "rails_helper"

RSpec.feature "Users sign in:", js: true do 
  
  let!(:user) { FactoryGirl.create(:user) }

  scenario "with valid credentials" do 
  	visit "/"

  	click_link "Log in"
  	fill_in "Email", with: user.email
  	fill_in "Password", with: "password"
  	click_button "Log in"

  	expect(page).to have_content user.email
  	expect(page).to have_content "You have logged in successfully."
  end

  scenario "with invalid credentials" do 
  	visit "/"

  	click_link "Log in"
  	fill_in "Email", with: user.email
  	fill_in "Password", with: "wrong password"
  	click_button "Log in"

  	expect(page).to have_content "Invalid log in credentials. Please try again."
  end
end