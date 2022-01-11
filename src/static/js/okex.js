$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"FANTOM Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Sakeswap",   `<a href='sakeswap'>Various</a>`,  "SAKE",    "https://okapp.sakeswap.fi"]
    ]
  }

  for( let i = 0; i < tableData.rows.length; i ++ ) {
    console.log({
      name: tableData.rows[i][0].trim(),
      src: tableData.rows[i][3] + "/favicon.ico"
    }, ',')
  }

  $('#okex_table').append(window.makeHead(tableData.heading))
  $('#okex_table').append(window.makeBody(tableData.rows))

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
