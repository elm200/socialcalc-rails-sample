json.extract! spreadsheet, :id, :title, :content, :created_at, :updated_at
json.url spreadsheet_url(spreadsheet, format: :json)