require 'rails_helper'

RSpec.describe Api::V1::BaseJsonApiControllerController, type: :controller do
  describe 'callbacks' do
    it 'calls require_user_api' do
      is_expected.to use_before_action(:check_logged_in)
    end
  end
end
