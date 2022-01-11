$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"KCC Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      [ "KuSwap",     `<a href="kuswap"       >Various</a>`,     "KUS",      "https://kuswap.io" ],
      [ "KuCat",     `<a href="kucat"       >Various</a>`,     "CAT",      "https://kucat.finance" ],
      [ "KuBeans",     `<a href="kubeans"       >Various</a>`,     "KUBEANS",      "https://kubeans.club" ],
    ]
  }

  for( let i = 0; i < tableData.rows.length; i ++ ) {
    console.log({
      name: tableData.rows[i][0].trim(),
      src: tableData.rows[i][3] + "/favicon.ico"
    }, ',')
  }

  $('#kcc_table').append(window.makeHead(tableData.heading))
  $('#kcc_table').append(window.makeBody(tableData.rows))

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
