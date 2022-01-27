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

ActiveRecord::Schema.define(version: 2022_01_27_210428) do

  create_table "video_owners", force: :cascade do |t|
    t.text "name"
    t.text "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "video_rates", force: :cascade do |t|
    t.integer "video_id"
    t.integer "rate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "video_viewed_logs", force: :cascade do |t|
    t.integer "video_id"
    t.text "viewer_ip"
    t.integer "video_viewer_id"
    t.integer "estimated_seconds_watched"
    t.boolean "shared_video"
    t.datetime "viewed_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "videos", force: :cascade do |t|
    t.text "title"
    t.text "url"
    t.text "thumbnailurl"
    t.text "tag"
    t.integer "video_owner_id"
    t.integer "category"
    t.integer "video_length_second"
    t.datetime "video_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
