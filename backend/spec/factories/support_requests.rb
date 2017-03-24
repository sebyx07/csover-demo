FactoryGirl.define do
  factory :support_request do
    user nil
    title "MyString"
    message "MyText"
    closed_at "2017-03-24"
  end
end
