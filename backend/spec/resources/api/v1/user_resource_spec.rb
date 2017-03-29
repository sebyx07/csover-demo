require 'rails_helper'

describe Api::V1::UserResource do
  subject { Api::V1::UserResource }

  describe 'attributes' do
    [:username, :role, :created_at, :updated_at]. each do |attribute|
      it attribute do
        expect(subject._attributes[attribute]).not_to be_nil
      end
    end
  end

  describe 'relationships' do
    [:support_requests].each do |relationship|
      it relationship do
        expect(subject._relationships[relationship]).not_to be_nil
      end
    end
  end
end