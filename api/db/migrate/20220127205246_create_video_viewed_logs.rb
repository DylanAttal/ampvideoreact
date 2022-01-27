class CreateVideoViewedLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :video_viewed_logs do |t|
      t.integer :video_id
      t.text :viewer_ip
      t.integer :video_viewer_id
      t.integer :estimated_seconds_watched
      t.boolean :shared_video
      t.timestamp :viewed_at

      t.timestamps
    end
  end
end
