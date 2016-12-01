# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  if $('#js-spreadsheet')[0]
    control = new SocialCalc.SpreadsheetControl()
    element_id = 'js-spreadsheet'
    control.InitializeSpreadsheetControl(element_id, 500, 900)
    content = $('#spreadsheet_content').val()
    control.sheet.ResetSheet()
    control.sheet.ParseSheetSave(content)
    control.sheet.ScheduleSheetCommands('recalc', false, false)

    $('.edit_spreadsheet :submit').click ->
      control = SocialCalc.GetSpreadsheetControlObject()
      content = control.sheet.CreateSheetSave()
      $('#spreadsheet_content').val(content)
