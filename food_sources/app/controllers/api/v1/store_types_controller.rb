class Api::V1::StoreTypesController < ApplicationController
  def index
    render json:StoreType.all
  end
end
