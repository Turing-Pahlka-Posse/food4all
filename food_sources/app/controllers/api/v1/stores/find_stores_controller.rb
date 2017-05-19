class Api::V1::Stores::FindStoresController < ApplicationController
  def index
    render json: Store.where(store_type_id: store_type_params)
  end

  private

  def store_type_params
    StoreType.where(name: params[:type].downcase).first.id
  end
end
