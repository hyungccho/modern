
class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :country
      t.string :state
      t.string :city
      t.string :zip
      t.string :address
      t.boolean :is_deleted, default: false
      t.integer :account_id, null: false

      t.timestamps
    end

    add_index :businesses, [:name, :account_id], unique: true
  end
end
