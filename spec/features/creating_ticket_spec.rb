require "rails_helper"

RSpec.feature "users can create tickets" do 
  scenario "with valid attributes" do 
  	visit "/"

  	click_link "Create Support Ticket"
  	fill_in "Title", with: "ticket title"
  	fill_in "Description", with: "issue"
  	click_button "Create Ticket"

  	expect(page).to have_content "Ticket created successfully."
  end
end