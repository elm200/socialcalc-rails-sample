// Generated by CoffeeScript 1.12.2
(function() {
  $(function() {
    var content, control, element_id, key_event_handler;
    if ($('#js-spreadsheet')[0]) {
      control = new SocialCalc.SpreadsheetControl();
      element_id = 'js-spreadsheet';
      control.InitializeSpreadsheetControl(element_id, 500, 900);
      content = $('#spreadsheet_content').val();
      control.sheet.ResetSheet();
      control.sheet.ParseSheetSave(content);
      control.sheet.ScheduleSheetCommands('recalc', false, false);
      key_event_handler = function(event_type, e) {
        if (!$.contains(document.getElementById('js-spreadsheet'), e.target)) {
          console.log("stopPropagation!");
          e.stopPropagation();
        }
        return true;
      };
      $('.js-spreadsheet-form :submit').click(function() {
        control = SocialCalc.GetSpreadsheetControlObject();
        content = control.sheet.CreateSheetSave();
        return $('#spreadsheet_content').val(content);
      });
      $('.js-spreadsheet-form').keydown(function(e) {
        return key_event_handler('keydown', e);
      });
      $('.js-spreadsheet-form').keypress(function(e) {
        return key_event_handler('keypress', e);
      });
      return $('.js-spreadsheet-form').keyup(function(e) {
        return key_event_handler('keyup', e);
      });
    }
  });

}).call(this);