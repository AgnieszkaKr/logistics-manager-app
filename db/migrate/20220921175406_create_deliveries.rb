class CreateDeliveries < ActiveRecord::Migration[7.0]
  def change
    create_table :deliveries do |t|
      t.integer :equipment_id
      t.integer :user_id
      t.string :start_time
      t.string :finish_time
      t.string :store_place

      t.timestamps
    end
  end
end
