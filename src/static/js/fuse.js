$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Fuse Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Fuseswap                       ",`<a href="fuseswap"               >Various</a>`,"FUSE               ","https://fuseswap.com"]
    ]
  }

  for( let i = 0; i < tableData.rows.length; i ++ ) {
    console.log({
      name: tableData.rows[i][0].trim(),
      src: tableData.rows[i][3] + "/favicon.ico"
    }, ',')
  }

  $('#bsc_table').append(window.makeHead(tableData.heading))
  $('#bsc_table').append(window.makeBody(tableData.rows))

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
