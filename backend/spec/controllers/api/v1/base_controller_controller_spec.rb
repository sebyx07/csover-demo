require 'rails_helper'

RSpec.describe Api::V1::BaseControllerController, type: :controller do
  klass = Api::V1::BaseControllerController

  roles = [:customer, :agent, :admin]
  roles.each_with_index do |role, index|
    method_name = "require_#{role}"

    describe "##{method_name}" do
      context 'good user' do
        it 'true' do
          user = create(:user, role: role)
          klass.any_instance.expects(:current_user).returns(user)
          ctrl = klass.new
          ctrl.send(method_name)
        end
      end

      context 'bad user' do
        it 'true' do
          user = create(:user, role: roles[index -1])
          klass.any_instance.expects(:current_user).returns(user)
          klass.any_instance.expects(:head).with(:not_found)
          ctrl = klass.new
          ctrl.send(method_name)
        end
      end
    end
  end
end
