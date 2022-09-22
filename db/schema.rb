# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_21_175732) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "constructions", force: :cascade do |t|
    t.string "address_city"
    t.string "address_street"
    t.string "address_building_number"
    t.string "address_zip"
    t.string "building_name"
    t.string "layout_plan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contractors", force: :cascade do |t|
    t.integer "user_id"
    t.integer "construction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "deliveries", force: :cascade do |t|
    t.integer "construction_id"
    t.integer "user_id"
    t.string "start_time"
    t.string "finish_time"
    t.string "store_place"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.integer "construction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logistics_managers", force: :cascade do |t|
    t.integer "user_id"
    t.integer "construction_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "delivery_id"
    t.integer "equipment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "last_name"
    t.string "company"
    t.string "title"
    t.string "email"
    t.string "phone_number"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end