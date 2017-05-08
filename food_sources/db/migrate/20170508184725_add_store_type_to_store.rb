class AddStoreTypeToStore < ActiveRecord::Migration[5.0]
  def change
    add_reference :stores, :store_type, foreign_key: true
  end
end
