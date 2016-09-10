module Accounts
  module Personals
    class Serializer < BaseSerializer
      attributes :id, :username, :password
    end
  end
end