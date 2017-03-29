module Api::V1
  class SupportRequestResource < Api::V1::BaseResource
    attributes :title, :message, :closed_at, :created_at, :updated_at

    has_one :user

    def self.records(options = {})
      current_user = options[:context][:current_user]

      if current_user.customer?
        current_user.support_requests
      else
        SupportRequest
      end
    end

    filter :user_id
  end
end