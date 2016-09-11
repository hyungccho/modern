class AddNameAndImageToAccount < ActiveRecord::Migration
  def change
    add_column :accounts, :first_name, :string
    add_column :accounts, :last_name, :string
    add_column :accounts, :image_url, :string
    add_index :accounts, [:first_name, :last_name]
  end
end
