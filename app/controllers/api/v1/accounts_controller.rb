module Api
  module V1
    class AccountsController < Api::V1::ApiBaseController
      def create
        @account = Account.new(account_params)

        if @account.save
          login!(@account)
          expose @account
        else
          error! :invalid_resource, @account.errors
        end
      end

      def update
      end

      def destroy
      end

      private

      def account_params
        params.require(:account).permit(:email, :password)
      end
    end
  end
end

