module Api::V1
  class UserResource < Api::V1::BaseResource
    attributes :username, :role, :created_at, :updated_at

    has_many :support_requests
  end
end