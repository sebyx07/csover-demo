module Api::V1
  class BaseJsonApiControllerController < Api::V1::BaseControllerController
    before_action :check_logged_in
  end
end