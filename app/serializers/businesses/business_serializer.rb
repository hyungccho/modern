module Businesses
  class BusinessSerializer < BaseSerializer
    attributes :id, :name, :country, :state, :city, :zip, :address, :account_id
  end
end