## 跟你朋友介紹 Git

菜哥啊～

你的笑話超冷的，血乘四是哪招......
抱歉一直打槍你，我們這麼麻吉，你懂的，好啦跟你介紹一下 Git 是什麼

Git 簡稱版本控制系統，顧名思義就是有套系統可以記錄你所以修改過的檔案的歷史版本
我喜歡用比喻的方式來教學，你就想像一下

我今天開了一間賣衣服的店，就叫小張的店，這間店一開始只賣男士白色短袖襯衫，其他都沒有賣
再來介紹這間店有三個主要的部門

1. 展示部 （ 就是給客人逛衣服的地方 ）
2. 修改部 （ 就是修改衣服的部門 ）
3. 儲藏室 （ 拿來放衣服樣本的地方 ）

好，就這樣，小張的店正式營運～
營運一陣子後為了因應市場需求，因為年輕人的口味不同了，所以小張打算把商品修改一下
修改步驟如下：

1. 小張到儲藏室拿了現在正在賣的短袖版本庫存，並放到了修改部
2. 修改部在襯衫上加了一顆小愛心，並且拿給了小張看
3. 小張看了沒問題就把展示部的 「 男士白色短袖襯衫 」 換成男士「 白色短袖愛心圖案襯衫 」
4. 並且把這個最新的衣服版本放到儲藏部保存好，以便日後方便查看或修改

好了，以上的比喻只要你看懂了你就了解 Git 的運作模式了
但我知道你一定有個疑問？ 「 真的還假的就這樣？你講實際的運用方式可以嗎？ 」
沒問題，我把上面的介紹加上一些註解其實就是 Git 的運作模式了

＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

## 加上註解後

我今天開了一間賣衣服的店，就叫小張的店，這間店一開始只賣男士白色短袖襯衫，其他都沒有賣
再來介紹這間店有三個主要的部門  //小張的店就是 repository，男士白色短袖襯衫就是你的版本控制的檔案

1. 展示部 （ 就是給客人逛衣服的地方 ）//Finder 裡面目前的版本檔案
2. 修改部 （ 就是修改衣服的部門 ）	//修改檔案
3. 儲藏室 （ 拿來放衣服樣本的地方 ） //存放檔案歷史版本的地方

好，就這樣，小張的店正式營運～
營運一陣子後為了因應市場需求，因為年輕人的口味不同了，所以小張打算把商品修改一下 //add，commit 觀念
修改步驟如下：

1. 小張到儲藏室拿了現在正在賣的短袖版本庫存，並放到了修改部  	//vim "男士白色短袖襯衫"
2. 修改部在襯衫上加了一顆小愛心，並且拿給了小張看			//git add "男士白色短袖愛心圖案襯衫"
3. 小張看了沒問題就把展示部的 「 男士白色短袖襯衫 」 換成 「 男士白色短袖愛心圖案襯衫 」//git commit -m 'add heart icon'
4. 並且把這個最新的衣服版本放到儲藏部保存好，以便日後方便查看或修改 //git log 即可看到衣服的歷史版本

＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

其他 Git 的觀念也可以用此方式作比喻的延伸
舉例 branch ： 
今天打算賣第二種產品 - 女士白色短袖襯衫 //git branch lady-Shirt
修改部門把男士短袖襯衫當作樣本修改 //git add 女士白色短袖襯衫
修該後拿到展示部門給小張確認 //git commit -m 'New Product'
確認無誤後再放到展示間展示 //git merger 展示間


