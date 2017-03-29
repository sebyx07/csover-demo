users = %w(customer agent admin).map do |role|
  FactoryGirl.create(:user, username: role, role: role)
end

FactoryGirl.create_list(:support_request, 100, user: users[0])