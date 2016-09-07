class Account < ActiveRecord::Base
  attr_reader :password

  include AccountLogic::Validations

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    account = Account.find_by_email(email)
    return unless account
    account.password?(password) ? account : nil
  end

  def self.generate_session_token
    SecureRandom.base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
