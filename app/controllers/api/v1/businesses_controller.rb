module Api
  module V1
    class BusinessesController < Api::V1::ApiBaseController
      before_action :load_account, only: [:index, :create, :update]
      before_action :load_business, only: [:update, :destroy]

      def index
        expose @account.businesses,
               each_serializer: Businesses::BusinessSerializer
      end

      def create
        @business = @account.businesses.new(business_params)

        if @business.save
          expose Businesses::BusinessSerializer.new(@business).serializable_hash
        else
          error! :unprocessable_entity
        end
      end

      def update
        if @business.update(business_params)
          expose Businesses::BusinessSerializer.new(@business).serializable_hash
        else
          error! :unprocessable_entity,
                 "Failed to update business with ID: #{@business.id}"
        end
      end

      def destroy
        if @business.destroy
          expose basic_success_message
        else
          error! :unprocessable_entity,
                 "Failed to delete business with ID: #{@business.id}"
        end
      end

      private

      def load_account
        @account = Account.find(params[:account_id])

        unless @account
          error! :not_found,
                 "Unable to find account with ID: #{params[:account_id]}"
        end
      end

      def load_business
        business_id = params[:business][:id]
        @business = @account.businesses.find_by_id(business_id)

        unless @business
          error! :not_found,
                 "Unable to find bussines with ID: #{params[:business][:id]}"
        end
      end

      def business_params
        params.require(:business).permit(
          :name,
          :country,
          :state,
          :city,
          :zip,
          :address
        )
      end
    end
  end
end
