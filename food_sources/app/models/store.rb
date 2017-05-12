class Store < ApplicationRecord
  belongs_to :store_type, required: false
end
