require "rails_helper"

RSpec.feature "view tickets:", js: true do
  scenario "all tickets" do 
    #ticket = FactoryGirl.create(:ticket, title: "Ticket 1", description: "issue 1")
    visit "/"

    #expect(page).to have_content "All Tickets"
  end
end 