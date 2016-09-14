class RemoveSoftDeleteFromBusiness < ActiveRecord::Migration
  def up
    remove_column :businesses, :is_deleted
  end

  def down
    add_column :businesses, :is_deleted, :boolean
  end
end
