# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170508184725) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "store_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stores", force: :cascade do |t|
    t.string   "name"
    t.string   "address_line1"
    t.string   "city"
    t.string   "zip"
    t.string   "phone"
    t.string   "sic"
    t.string   "naics"
    t.string   "sales_volume"
    t.string   "employees"
    t.string   "lat"
    t.string   "long"
    t.string   "neighborhood"
    t.string   "hcsi"
    t.string   "council_district"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "store_type_id"
    t.index ["store_type_id"], name: "index_stores_on_store_type_id", using: :btree
  end

  add_foreign_key "stores", "store_types"
end
