module Api::V1
  class BaseControllerController < ApplicationController
    [:customer, :agent, :admin].each do |role|
      method_name = "require_#{role}"
      define_method method_name do
        unless current_user.send("#{role}?")
          head :not_found
        end
      end

      protected method_name
    end
  end
end