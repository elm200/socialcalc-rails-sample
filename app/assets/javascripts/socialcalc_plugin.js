(function($) {
  $.fn.socialcalc = function(form_selector, content_selector) {
    return this.each(function() {
      var content, control, element_id, key_event_handler;
      var _spreadsheet_element = this;

      control = new SocialCalc.SpreadsheetControl();
      control.InitializeSpreadsheetControl(_spreadsheet_element, 500, 900);
      content = $(content_selector).val();
      control.sheet.ResetSheet();
      control.sheet.ParseSheetSave(content);
      control.sheet.ScheduleSheetCommands('recalc', false, false);

      key_event_handler = function(event_type, e) {
        if (!$.contains(_spreadsheet_element, e.target)) {
          e.stopPropagation();
        }
        return true;
      };
      $(form_selector + ' :submit').click(function() {
        control = SocialCalc.GetSpreadsheetControlObject();
        content = control.sheet.CreateSheetSave();
        return $(content_selector).val(content);
      });
      $(form_selector).keydown(function(e) {
        return key_event_handler('keydown', e);
      });
      $(form_selector).keypress(function(e) {
        return key_event_handler('keypress', e);
      });
      return $(form_selector).keyup(function(e) {
        return key_event_handler('keyup', e);
      });
    });
  };
})(jQuery);
