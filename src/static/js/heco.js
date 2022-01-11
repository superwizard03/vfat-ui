$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"HECO Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Lavaswap  ",`<a href="lava"      >Various</a>`,"LAVA","https://lavaswap.com"],
      ["Mdex      ",`<a href="mdex"      >Various</a>`,"MDX ","https://ht.mdex.com"],
      ["Complus   ",`<a href="complus"   >Various</a>`,"COM ","https://heco.complus.exchange"],
      ["Hecostable",`<a href="hecostable">Various</a>`,"HSS ","https://hecostable.finance"],
      ["Booster   ",`<a href="booster"   >Various</a>`,"BOO ","https://booster.farm"],
      ["Mdis      ",`<a href="mdis"      >Various</a>`,"MDIS","https://mdis.finance"],
      ["Pippi     ",`<a href="pippi"     >Various</a>`,"PIPI","https://app.pippi.finance"],
      ["Nut       ",`<a href="nut"       >Various</a>`,"NUT ","https://nut.money"],
      ["Maki      ",`<a href="maki"      >Various</a>`,"MAKI","https://app.makiswap.com"],
      ["Elk       ",`<a href="elk"       >Various</a>`,"ELK ","https://app.elk.finance"]
    ]
  }
    for( let i = 0; i < tableData.rows.length; i ++ ) {
      console.log({
        name: tableData.rows[i][0].trim(),
        src: tableData.rows[i][3] + "/favicon.ico"
      }, ',')
    }

  $('#heco_table').append(window.makeHead(tableData.heading))
  $('#heco_table').append(window.makeBody(tableData.rows))

  // let table = new AsciiTable().fromJSON(tableData);
  // document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
