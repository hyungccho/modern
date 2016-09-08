module Api
  module V1
    class ApiBaseController < RocketPants::Base
      helper_method :current_account,
                    :logged_in?,
                    :basic_success_message,
                    :basic_failure_message

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
        unless current_account
          render json: { base: ['Invalid credentials'] }, status: 401
        end
      end

      def basic_success_message
        { success: true }
      end

      def basic_failure_message
        { success: false }
      end
    end
  end
end