require 'rails_helper'

RSpec.describe Api::V1::SupportRequestsController, type: :controller do
  describe '#generate_pdf' do
    it '200 when agent' do
      user = create(:user, role: :agent)

      get :generate_pdf, session: {user_id: user.id}
      expect(response).to have_http_status(200)
    end
  end
end