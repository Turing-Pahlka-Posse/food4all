require 'rails_helper'

RSpec.describe "Stores API" do
  it "display list of all stores" do
    type = create(:store_type)
    store_1 = create(:store, store_type_id: type.id)
    store_2 = create(:store, store_type_id: type.id)
    store_3 = create(:store, store_type_id: type.id)

    get '/api/v1/stores'

    expect(response).to be_success

    stores = JSON.parse(response.body)
    first_store = stores.first

    expect(stores.count).to eq(3)
    expect(response.status).to eq(200)
  end

  it 'displays stores filtered by type' do
    types = create_list(:store_type, 4)
    store = create(:store)
    types.first.stores << store

    get "/api/v1/stores/find?type=#{types.first.name}"

    stores = JSON.parse(response.body)

    expect(response).to be_success
    expect(response.status).to eq(200)
    expect(stores.count).to eq(1)
    expect(stores.first["name"]).to eq(store.name)
  end
end
