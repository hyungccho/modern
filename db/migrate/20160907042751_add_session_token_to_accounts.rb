class AddSessionTokenToAccounts < ActiveRecord::Migration
  def change
    add_column :accounts, :session_token, :string, null: false
    add_index :accounts, :session_token, unique: true
  end
end
