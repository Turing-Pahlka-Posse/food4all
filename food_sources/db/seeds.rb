require 'csv'

CSV.foreach('db/data/food_stores.csv', headers: true, header_converters: :symbol) do |row|
  type = StoreType.find_or_create_by(name: row[:store_type])
  type.stores.create(
  name: row[:store_name],
  address_line1: row[:address_line1],
  city: row[:city],
  zip: row[:zip],
  phone: row[:phone],
  sic: row[:sic],
  naics: row[:naics_ext],
  sales_volume: row[:sales_vol],
  employees: row[:number_emp],
  lat: row[:point_y],
  long: row[:point_x],
  neighborhood: row[:nbhd_name],
  hcsi: row[:hcsi],
  council_district: row[:council_district]
  )
end
