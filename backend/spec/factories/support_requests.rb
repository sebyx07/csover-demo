FactoryGirl.define do
  factory :support_request do
    user nil
    sequence :title do |n|
      "Support request ##{n}"
    end
    message 'MyText MyText MyText MyText MyText MyText MyText MyText MyText MyText MyText MyText'
    closed_at Time.now
  end
end
