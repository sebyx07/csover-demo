require 'rails_helper'

describe Api::V1::SupportRequestResource do
  subject { Api::V1::SupportRequestResource }

  describe 'attributes' do
    [:title, :message, :closed_at, :created_at, :updated_at]. each do |attribute|
      it attribute do
        expect(subject._attributes[attribute]).not_to be_nil
      end
    end
  end

  describe 'relationships' do
    [:user].each do |relationship|
      it relationship do
        expect(subject._relationships[relationship]).not_to be_nil
      end
    end
  end

  describe '.records' do
    context 'customer' do
      it 'relationship' do
        user = create(:user)
        result = subject.records({context: {current_user: user}})
        expect(result).to be_a(ActiveRecord::Associations::CollectionProxy)
      end
    end

    context 'other' do
      it SupportRequest do
        user = create(:user, role: :agent)
        result = subject.records({context: {current_user: user}})
        expect(result).to eq(SupportRequest)
      end
    end
  end
end