FactoryGirl.define do
  factory :user do
    sequence :username do |n|
      "user_#{n}"
    end

    password '312312__OKOK'

    role :customer
  end
end
