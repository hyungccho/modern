module Api
  module V1
    class AccountsController < Api::V1::ApiBaseController
      before_action :set_s3_direct_post, only: [:create, :update]

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

      def set_s3_direct_post
        @s3_direct_post = S3_BUCKET.presigned_post(
          key: "uploads/#{SecureRandom.uuid}/${filename}",
          success_action_status: '201',
          acl: 'public-read'
        )
      end
    end
  end
end

