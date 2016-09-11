module Api
  module V1
    class SessionsController < Api::V1::ApiBaseController
      def create
        @account = Account.find_by_credentials(
          params[:account][:username],
          params[:account][:password]
        )

        if @account.nil?
          error! :unauthenticated, 'Invalid username/password combination'
        else
          login!(@account)
          expose Accounts::Personal::Serializer.new(@account).serializable_hash
        end
      end

      def destroy
        @account = current_account

        if @account
          logout!
          expose basic_success_message
        else
          error! :invalid_version, 'Nobody is signed in!'
        end
      end
    end
  end
end
