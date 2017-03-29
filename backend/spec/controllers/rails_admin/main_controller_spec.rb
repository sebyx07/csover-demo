require 'rails_helper'

RSpec.describe RailsAdmin::MainController, type: :controller do
  klass = RailsAdmin::MainController

  describe '#check_logged_in' do
    context 'user is present and is admin' do
      it 'continues' do
        ctrl = klass.new
        ctrl.expects(:current_user).times(2).returns build(:user, role: :admin)
        ctrl.send(:check_logged_in)
      end
    end

    context 'user is not present' do
      it 'redirects to login' do
        ctrl = klass.new
        ctrl.expects(:current_user).returns nil
        ctrl.expects(:redirect_to).with('/')
        ctrl.send(:check_logged_in)
      end
    end
  end
end