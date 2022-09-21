class CreateConstructions < ActiveRecord::Migration[7.0]
  def change
    create_table :constructions do |t|
      t.string :address_city
      t.string :address_street
      t.string :address_building_number
      t.string :address_zip
      t.string :building_name
      t.string :layout_plan

      t.timestamps
    end
  end
end
