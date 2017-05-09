class CreateStores < ActiveRecord::Migration[5.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :address_line1
      t.string :city
      t.string :zip
      t.string :phone
      t.string :sic
      t.string :naics
      t.string :sales_volume
      t.string :employees
      t.string :lat
      t.string :long
      t.string :neighborhood
      t.string :hcsi
      t.string :council_district

      t.timestamps
    end
  end
end
