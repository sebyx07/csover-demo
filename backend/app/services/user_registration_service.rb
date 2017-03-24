class UserRegistrationService
  attr_reader :username, :password

  def initialize(username, password)
    @username = username
    @password = password
  end

  def register
    User.create(username: username, password: password, role: :customer)
  end

  class << self
    def register(params)
      service = new(params[:username], params[:password])
      service.register
    end
  end
end