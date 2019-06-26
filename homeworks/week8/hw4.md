## 什麼是 Ajax？
  一種交換資料的方式
  任何非同步處理的技術都可簡稱是 Ajax

## 用 Ajax 與我們用表單送出資料的差別在哪？
  Ajax 可以不用等到 request 回應，就可以先直接處理下一步，也就是 Ajax 受歡迎的地方，而表單送出則是相反，畫面須等待 request 回應才會繼續執行後面的動作，而且會換頁處理

## JSONP 是什麼？
  也是一種交換資料的方式，較少在使用
  可不受同源政策就可以拿到 <img> 、 <script> 兩個標籤的資料

## 要如何存取跨網域的 API？
  Server 的 response 中要把 Access control Allow origin 設定成 ＊ 才可以存取跨網域的 API

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
  因為第四週練習用的 API 網頁，預設 response 就已經把 Access control Allow origin 設定成 ＊ ，所以不會有跨網域的問題，但是第八週的作業終須串接 Twitch API ，若是在 requestHeader 沒有正確的開發者 Client-ID 則是無法跨網域拿取 Twitch 的資料
