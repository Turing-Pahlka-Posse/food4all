require 'rails_helper'

RSpec.describe "Stores Type API" do
  it "display list of all store types" do
    types = create_list(:store_type, 4)

    get '/api/v1/store_types'

    store_types = JSON.parse(response.body)

    expect(response).to be_success
    expect(response.status).to eq(200)
    expect(store_types.count).to eq(4)
  end
end
