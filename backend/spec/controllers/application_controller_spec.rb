require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
  klass = ApplicationController

  describe '#check_recaptcha' do
    context 'good' do
      it '200' do
        klass.any_instance.expects(:verify_recaptcha).returns true
        ctrl = klass.new
        ctrl.send(:check_recaptcha)
      end
    end

    context 'bad' do
      it '422' do
        klass.any_instance.expects(:verify_recaptcha).returns false
        klass.any_instance.expects(:render).with(json: {recaptcha: ['Code Invalid']}, status: 422)
        ctrl = klass.new
        ctrl.send(:check_recaptcha)
      end
    end
  end

  describe '#check_logged_in' do
    context 'user is present' do
      it 'continues' do
        ctrl = klass.new
        ctrl.expects(:current_user).returns build(:user)
        ctrl.send(:check_logged_in)
      end
    end

    context 'user is not present' do
      it 'continues' do
        ctrl = klass.new
        ctrl.expects(:current_user).returns nil
        ctrl.expects(:head).with(:not_found)
        ctrl.send(:check_logged_in)
      end
    end
  end
end