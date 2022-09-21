class CreateLogisticsManagers < ActiveRecord::Migration[7.0]
  def change
    create_table :logistics_managers do |t|
      t.integer :user_id
      t.integer :construction_id

      t.timestamps
    end
  end
end
