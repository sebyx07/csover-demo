module Api::V1
  class SupportRequestResource < Api::V1::BaseResource
    attributes :title, :message, :closed_at, :created_at, :updated_at

    has_one :user

    filter :user_id, apply: ->(records, value, _options) {
      id = value[0]
      user = _options[:context][:current_user]
      puts user
      records
    }
  end
end