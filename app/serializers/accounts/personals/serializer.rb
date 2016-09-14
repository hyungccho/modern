module Accounts
  module Personals
    class Serializer < BaseSerializer
      attributes :id, :username, :password, :first_name, :last_name
    end
  end
end