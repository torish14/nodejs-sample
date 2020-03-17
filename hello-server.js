// httpモジュールを読み込む
const http = require('http')

// Webサーバーを実行
const svr = http.createServer(handler) // サーバーを生成
svr.listen(8081) // ポート8081で待ち合わせ開始

// サーバーにアクセスがあったときの処理
function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)
  // HTTPヘッダーを出力
  res.writeHead(200, {'Content-Type': 'text/html'})
  //レスポンス本体を出力
  res.end('<h1>Hello, World!</h1>\n')
}
