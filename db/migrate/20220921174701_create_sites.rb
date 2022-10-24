class CreateSites < ActiveRecord::Migration[7.0]
  def change
    create_table :sites do |t|
      t.string :address_city
      t.string :address_street
      t.string :address_building_number
      t.string :address_zip
      t.string :building_name
      t.string :layout_plan
      t.integer :user_id

      t.timestamps
    end
  end
end
