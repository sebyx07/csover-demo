Recaptcha.configure do |config|
  config.site_key  = Rails.application.secrets.google_recapcha_key_public
  config.secret_key = Rails.application.secrets.google_recapcha_key_private
end