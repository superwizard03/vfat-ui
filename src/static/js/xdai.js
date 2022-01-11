$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"XDAI Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
        ["Bao"        ,`<a href="bao">Various</a>`         ,"BAO"       ,"https://farms.baoswap.xyz"],
        ["Levin"      ,`<a href="levin">Various</a>`       ,"LEVIN"     ,"https://farm.levinswap.org"],
        ["Swapr"      ,`<a href="swapr">Various</a>`       ,"Various"   ,"https://swapr.eth.link/#/pools"]
      ]
  }

  for( let i = 0; i < tableData.rows.length; i ++ ) {
    console.log({
      name: tableData.rows[i][0].trim(),
      src: tableData.rows[i][3] + "/favicon.ico"
    }, ',')
  }

  $('#xdai_table').append(window.makeHead(tableData.heading))
  $('#xdai_table').append(window.makeBody(tableData.rows))

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
