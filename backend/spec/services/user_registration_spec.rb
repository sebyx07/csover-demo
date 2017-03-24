require 'rails_helper'

describe UserRegistrationService do
  describe '.register' do
    it 'creates a new user' do
      user_attrs = build(:user)
      user = UserRegistrationService.register({username: user_attrs.username, password: user_attrs.password})
      expect(user.persisted?).to be_truthy
      expect(user.customer?).to be_truthy
    end
  end
end