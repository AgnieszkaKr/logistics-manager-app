class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :delivery_id
      t.integer :equipment_id

      t.timestamps
    end
  end
end
