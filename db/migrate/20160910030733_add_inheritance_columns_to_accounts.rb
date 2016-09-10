class AddInheritanceColumnsToAccounts < ActiveRecord::Migration
  def change
    add_column :accounts, :type, :string
    add_column :accounts, :username, :string
    add_index :accounts, :username, unique: true
  end
end
