require 'rails_helper'

RSpec.describe SupportRequest, type: :model do
  describe '#title' do
    [:presence, :length].each do |validation|
      it validation do
        eval "is_expected.to validate_#{validation}_of(:title)"
      end
    end
  end

  describe '#message' do
    [:presence, :length].each do |validation|
      it validation do
        eval "is_expected.to validate_#{validation}_of(:message)"
      end
    end
  end
end
