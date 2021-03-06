module Api::V1
  class SupportRequestsController < Api::V1::BaseJsonApiControllerController
    before_action :require_agent, only: [:generate_pdf]

    def generate_pdf
      @requests = SupportRequest.includes(:user).where('closed_at > ?', 1.month.ago)

      render pdf: 'report'
    end
  end
end