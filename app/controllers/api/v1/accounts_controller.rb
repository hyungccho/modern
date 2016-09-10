module Api
  module V1
    class AccountsController < Api::V1::ApiBaseController
      def create
        @account = Accounts::Personal.new(account_params)

        if @account.save
          login!(@account)
          expose Accounts::Personal::Serializer.new(@account).serializable_hash
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
        params.require(:account).permit(:username, :email, :password)
      end
    end
  end
end

