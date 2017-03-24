class User < ApplicationRecord
  has_secure_password
  enum role: [:customer, :agent, :admin]
  has_many :support_requests

  validates :username, presence: true, uniqueness: true, length: {
      maximum: 20, minimum: 4
  }

  validates :password, format: {
      with: /\A(?=.*[a-zA-Z])(?=.*[0-9]).{6,}\z/
  }

  validates :password_digest, presence: true
  validates :role, presence: true

end
