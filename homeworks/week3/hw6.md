## hw1：好多星星

第一題看到題目大概就知道怎麼解了，心中馬上跳出要巢狀迴圈，就像 ９９ 乘法表一樣，第一個迴圈寫的是有 n 個值，第二層迴圈是每個值 n 個星星。

## hw2：大小寫互換

第二題難度也不算太高，只要把傳進函示的引數字串用迴圈一個一個判斷引數內的字元是大寫小寫還是其它字元，我是用字元轉成 ASCII 碼的方式去判斷是大寫還是小寫，若都不是大小寫則直接回傳該字元，不用特別去做變動。

## hw3：判斷質數

這題在 JS101 最後 LV3 的題目有出現過，我是直接把我之前寫的程式碼複製過來，當然有再稍微看一下當時的寫法如何，覺得寫得不是很好，東湊西補的，但還是有做出來，用其他方式來形容像是煮飯，我先把菜燙好之後再試吃，不夠鹹加一點鹽巴，太閒再多加點菜稀釋一下，最後加來減去還是可以吃，只是做法很笨拙而已。

## hw4：判斷迴文

這題我解了快三十分鐘，因為原本十分鐘就解完，但上傳到 Lidemy OJ 時只出現 75 分一直找不到問題，後還才發現，喔～～原來只有一個字也算迴文，做完這題讓我深深的感受到為何要做測試，也多虧這題讓我理解到 Jest 的重要性，以及它存在的價值。

## hw5：大數加法

這題真如老師所說的難，可是老師也很好心的給了個大提示，我先在白紙上舉例兩個數相加，去看它們直式相加會出現的一些規則，把這些規則一一地寫下來，再畫個流程圖，第一步要先判斷兩數是否字元相同不同，是或不適的話分別要做什麼處理，第二步判斷從最右邊的數值開始相加，有三種情況，相加小於十、大於十、或等於十，除了這個也要把大於十會進位的條件算進去，最後再照著這個規則把文字轉化成程式碼答案就出來了。