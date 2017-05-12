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
end
