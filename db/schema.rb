# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160913011510) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "session_token",   null: false
    t.string "type"
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "image_url"
  end

  add_index "accounts", ["email"], name: "index_accounts_on_email", unique: true, using: :btree
  add_index "accounts", ["first_name", "last_name"], name: "index_accounts_on_first_name_and_last_name", using: :btree
  add_index "accounts", ["session_token"], name: "index_accounts_on_session_token", unique: true, using: :btree
  add_index "accounts", ["username"], name: "index_accounts_on_username", unique: true, using: :btree

  create_table "businesses", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "country"
    t.string   "state"
    t.string   "city"
    t.string   "zip"
    t.string   "address"
    t.integer  "account_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "businesses", ["name", "account_id"], name: "index_businesses_on_name_and_account_id", unique: true, using: :btree

end
