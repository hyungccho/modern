module AccountLogic
  module Validations
    extend ActiveSupport::Concerns

    included do
      validates :email, presence: true
      validates :password_digest, presence: { message: "Password can't be blank" }
      validates :password, length: { minimum: 6, allow_nil: true }
      validates :session_token, presence: true
    end
  end
end