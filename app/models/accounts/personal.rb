# == Schema Information
#
# Table name: accounts
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  session_token   :string           not null
#  type            :string
#  username        :string
#  first_name      :string
#  last_name       :string
#  image_url       :string
#

module Accounts
  class Personal < Account
    has_many :businesses, class_name: 'Business', foreign_key: 'account_id'
  end
end
