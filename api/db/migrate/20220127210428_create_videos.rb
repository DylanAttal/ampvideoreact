class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.text :title
      t.text :url
      t.text :thumbnailurl
      t.text :tag
      t.integer :video_owner_id
      t.integer :category
      t.integer :video_length_second
      t.timestamp :video_created_at

      t.timestamps
    end
  end
end
