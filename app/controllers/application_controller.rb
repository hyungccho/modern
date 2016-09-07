class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_account, :logged_in?

  def login!(account)
    account.reset_session_token!
    session[:session_token] = account.session_token
    @account = account
  end

  def current_account
    return if session[:session_token].nil?
    @current_account ||= Account.find_by_session_token(session[:session_token])
  end

  def logged_in?
    current_account.present?
  end

  def logout!
    current_account.reset_session_token!
    session[:session_token] = nil
    @current_account = nil
  end

  def require_logged_in
    render json: { base: ['Invalid credentials'] }, status: 401 unless current_account
  end
end
