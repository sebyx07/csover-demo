JSONAPI.configure do |config|
  config.resource_key_type = :uuid

  config.default_paginator = :offset
  config.top_level_links_include_pagination = false
  config.default_page_size = 10
  config.maximum_page_size = 20

  config.top_level_meta_include_record_count = true
  config.top_level_meta_record_count_key = :record_count
end