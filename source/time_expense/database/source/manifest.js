{
  "name": "time_expense",
  "version": "1.4.4",
  "comment": "Time Expense Management extension",
  "loadOrder": 100,
  "dependencies": ["project"],
  "databaseScripts": [
    "te/schema/create_te_schema.sql",
    "te/functions/calcrate.sql",
    "te/functions/copyitem.sql",
    "te/functions/invoicesheets.sql",
    "te/functions/postsheet.sql",
    "te/functions/sheetstate.sql",
    "te/functions/unnest.sql",
    "te/functions/vouchersheet.sql",
    "te/trigger_functions/tehead.sql",
    "te/trigger_functions/teitem.sql",
    "te/trigger_functions/teprj.sql",
    "xt/trigger_functions/teitem_did_change.sql",
    "te/tables/tecustrate.sql",
    "te/tables/teemp.sql",
    "te/tables/teexp.sql",
    "te/tables/tehead.sql",
    "te/tables/teitem.sql",
    "te/tables/teprj.sql",
    "te/tables/teprjtask.sql",
    "xt/functions/te_total_hours.sql",
    "xt/functions/te_total_expenses.sql",
    "xt/functions/te_to_invoice.sql",
    "xt/functions/te_to_voucher.sql",
    "xt/functions/te_invoiced_value.sql",
    "xt/functions/te_posted_value.sql",
    "xt/functions/te_vouchered_value.sql",
    "xt/functions/te_invoiced_state.sql",
    "xt/functions/te_posted_state.sql",
    "xt/functions/te_vouchered_state.sql",
    "xt/views/prjtaskinfo.sql",
    "xt/views/tecustrateinfo.sql",
    "xt/views/teprjinfo.sql",
    "xt/views/teprjtaskinfo.sql",
    "xt/views/teexpinfo.sql",
    "xt/views/teheadinfo.sql",
    "xm/javascript/project.sql",
    "xm/javascript/worksheet.sql",
    "priv.sql"
  ]
}
