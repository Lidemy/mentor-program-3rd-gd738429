## 什麼是 DOM？

DOM 的全名簡稱 Document Object Model，顧名思義是把文件轉換成物件的模型，在 HTML 的階層結構中，其實也可以把它想成是物件的階層，所以 DOM 的核心概念就是把 HTML 轉換成物件，讓我們可以透過 JavaScript 存取到 HTML 的元素，就像是一座 HTML 與 JavaScript 的橋樑。 

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

在網頁裡做的任何動作都算是一個事件，例如點擊滑鼠，按下鍵盤，重整網頁等......，這些事件一但被處發就會產生傳遞的機制，假設我在一 HTML 的 BODY 中新增一個 div ，當我點擊 div 時，一個點擊的事件就產生，此事件會從 HTML 最上層的結點開始往下傳，路徑為 WINDOW > DOCUMENT > HTML > BODY > DIV 此傳遞階段稱為捕獲階段，當事件傳遞到選取的 div 時就算目標階段，最後的傳遞路徑為冒泡階段 DIV > BODY > HTML > DOCUMENT >WINDOW ，傳為網頁最上層的節點。

## 什麼是 event delegation，為什麼我們需要它？

簡稱事件代理，打個比喻，國小時去動物園戶外教學，一定是老師一次幫同學買好門票，不可能由每個小朋友一一買票入場，event delegation 就類似此機制，若是在某個 div 底下有 30 個 input ，若要每個 input 都坐事件監聽就太沒效率，這事就可以用事件的捕獲與冒泡機制，透過 input 的上一層節點的元素作監聽，這樣一來就只要新增一個事件監聽，因為每個都經過 input 的事件一定會經過他的上一層節點 div ，總結一句話解釋事件代理，透過父節點去處理子節點的事件就稱為 event delegation

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

1.event.preventDefault() 是指停止該元素預設的行為，假設某一連結 <a id='link'>link</a> 預設行為是連結到 google 首頁，若到此元素的捕獲階段中有出現 event.preventDefault()，則改連結的預設行為即會失效。
ex: document.getElementById('link').addEventListener('click', (e) => {
	  	event.preventDefault();
    })

2.event.stopPropagation() 是指停止事件的傳遞，若是某元素監聽程式碼中有出現該函式，則會從該元素停止事件的傳遞，但要特別注意，若是同時間該元素有超過一個的監聽事件，傳遞還是會繼續進行，若要停止所有的事件則需用函式 e.stopImmediatePropagation() 
ex: document.getElementById('link').addEventListener('click', (e) => {
	  	event.stopPropagation();
    })

