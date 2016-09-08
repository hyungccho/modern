# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  country    :string
#  state      :string
#  city       :string
#  zip        :string
#  address    :string
#  is_deleted :boolean          default(FALSE)
#  account_id :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Business < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :account

  def destroy
    self.is_deleted = true
    save
  end
end
