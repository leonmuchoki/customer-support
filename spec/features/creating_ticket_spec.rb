require "rails_helper"

RSpec.feature "users can create tickets", js:true do 
  scenario "with valid attributes" do 
  	visit "/"

  	click_link "Create Support Ticket"
  	fill_in "Subject", with: "ticket title"
  	fill_in "Description", with: "issue"
  	click_button "Submit"

  	expect(page).to have_content "Ticket created successfully."
  end
end