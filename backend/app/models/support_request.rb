class SupportRequest < ApplicationRecord
  belongs_to :user, optional: true

  scope :closed, -> { where('closed_at != NULL') }

  validates :title, presence: true, length: {
      maximum: 40, minimum: 10
  }

  validates :message, presence: true, length: {
      maximum: 10000, minimum: 40
  }

  def closed?
    self.closed_at.present?
  end
end
