class CreateManagers < ActiveRecord::Migration[7.0]
  def change
    create_table :managers do |t|
      t.integer :site_id
      t.integer :user_id
    end
  end
end
