require 'rails_helper'

RSpec.describe "Store API show" do
  it "displays a single store" do
    type = create(:store_type)
    store = create(:store, store_type_id: type.id)

    get "/api/v1/stores/#{store.id}"

    store_json = JSON.parse(response.body)

    expect(response).to be_success
    expect(response.status).to eq(200)
    expect(store_json["name"]).to eq(store.name)
    expect(store_json["store_type_id"]).to eq(type.id)
  end
end
