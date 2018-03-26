package main

import (
    "os"
    "fmt"
    "text/template"
)

func main() {
	var t = template.Must(template.ParseFiles("loop.html")) // 外部テンプレートファイルの読み込み
    
	if err := t.Execute(os.Stdout, nil); err != nil { // テンプレート出力
        fmt.Println(err.Error())
    }
}