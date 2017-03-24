require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    describe '#username' do
      it 'uniqueness' do
        create(:user) # needs a record in the db to check for uniquness
        is_expected.to validate_uniqueness_of(:username)
      end

      [:presence, :length].each do |validation|
        it validation do
          eval "is_expected.to validate_#{validation}_of(:username)"
        end
      end
    end

    describe '#password' do
      it 'valid' do
        is_expected.to allow_value('312312__OKOK').for(:password)
      end

      it 'invalid' do
        is_expected.not_to allow_value('312312').for(:password)
      end
    end

    describe 'role' do
      it 'present' do
        is_expected.to validate_presence_of(:role)
      end
    end
  end
end
