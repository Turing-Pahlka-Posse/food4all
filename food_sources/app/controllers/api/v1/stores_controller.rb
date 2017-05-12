class Api::V1::StoresController < ApplicationController
  def index
    render json: Store.all
  end
end
