require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  describe 'login' do
    context 'valid user' do
      it 'ok' do
        user = create(:user)

        post 'login', params: {username: user.username, password: user.password}
        expect(response).to have_http_status(:ok)
      end
    end

    context 'invalid user' do
      it 'not found' do
        password = '1234'
        user = create(:user)

        post 'login', params: {username: user.username, password: password}
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'register' do
    context 'valid registration' do
      it 'ok' do
        user = build(:user)

        post 'register', params: {username: user.username, password: user.password}
        expect(response).to have_http_status(:ok)
      end
    end

    context 'invalid registration' do
      it '422' do
        password = '1234'
        user = build(:user)

        post 'register', params: {username: user.username, password: password}
        expect(response).to have_http_status(422)
      end
    end
  end

  describe '#current' do
    context 'current user is present' do
      it '200' do
        user = create(:user)

        get 'current', session: {user_id: user.id}
        expect(response).to have_http_status(200)
      end
    end

    context 'current user is not logged in' do
      it '404' do
        get 'current'
        expect(response).to have_http_status(404)
      end
    end
  end
end