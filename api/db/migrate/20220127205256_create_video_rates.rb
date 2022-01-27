class CreateVideoRates < ActiveRecord::Migration[6.1]
  def change
    create_table :video_rates do |t|
      t.integer :video_id
      t.integer :rate

      t.timestamps
    end
  end
end
