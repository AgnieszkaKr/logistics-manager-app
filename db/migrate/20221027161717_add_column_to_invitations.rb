class AddColumnToInvitations < ActiveRecord::Migration[7.0]
  def change
    add_column :invitations, :name, :string
    add_column :invitations, :company, :string
  end
end
