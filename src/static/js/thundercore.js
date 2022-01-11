$(function() {
  main()
})

const main = async () => {
  let tableData = {
    title: 'ThundeCore Network',
    heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
    rows: [['Ram Protocol', `<a href="ram">Various</a>`, 'RAM', 'https://rammer.finance/']],
  }

  for( let i = 0; i < tableData.rows.length; i ++ ) {
    console.log({
      name: tableData.rows[i][0].trim(),
      src: tableData.rows[i][3] + "/favicon.ico"
    }, ',')
  }

  $('#thundercore_table').append(window.makeHead(tableData.heading))
  $('#thundercore_table').append(window.makeBody(tableData.rows))

  let table = new AsciiTable().fromJSON(tableData)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}
