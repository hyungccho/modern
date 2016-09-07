class Api::AccountsController < ApplicationController
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
