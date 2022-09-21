class CreateContractors < ActiveRecord::Migration[7.0]
  def change
    create_table :contractors do |t|
      t.integer :user_id
      t.integer :construction_id

      t.timestamps
    end
  end
end
