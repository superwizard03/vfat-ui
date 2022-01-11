$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Harmony Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      [
        "Mochi",
        `<a href='mochi'>Various</a>`,
        "hMOCHI",
        "https://harmony.mochiswap.io"
      ],
      [
        "Viper",
        `<a href='viper'>Various</a>`,
        "VIPER",
        "https://viper.exchange"
      ],
      [
        "Open Swap",
        `<a href='oswap'>Various</a>`,
        "oSWAP",
        "https://app.openswap.one"
      ],
      [
        "Loot",
        `<a href='loot'>Various</a>`,
        "LOOT",
        "https://lootswap.finance"
      ],
      [
        "Daikiri",
        `<a href='daikiri'>Various</a>`,
        "DAIKI",
        "https://daikiri.finance/#"
      ],
      [
        "Sushi",
        `<a href='sushi'>Various</a>`,
        "SUSHI",
        "N/A"
      ]
    ]
  }

  for( let i = 0; i < tableData.rows.length; i ++ ) {
    console.log({
      name: tableData.rows[i][0].trim(),
      src: tableData.rows[i][3] + "/favicon.ico"
    }, ',')
  }

  $('#harmony_table').append(window.makeHead(tableData.heading))
  $('#harmony_table').append(window.makeBody(tableData.rows))

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
