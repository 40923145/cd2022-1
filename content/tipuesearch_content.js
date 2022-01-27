var tipuesearch = {"pages": [{'title': 'About', 'text': '機械設計工程系大二協同產品設計實習課程. \n 課程網頁:  https://mde.tw/cd2022 \n 課程倉儲:  https://github.com/mdecourse/cd2022 \n 課程規劃與作業:  https://github.com/mdecourse/cd2022/discussions \n 課程討論區:  https://gitter.im/mdecourse/cd2022 \n \n 課程簡介: \n 協同產品設計實習承接電腦輔助設計實習課程, 著重在探討多人模式下, 如何有效執行與機電系統設計相關的產品開發流程. \n 本課程以每四人為一小組, 兩小組為一大組執行機電系統模型設置專案, 任務一將延續  cad2021  ( Hw ,  Final ) 中的 meArm Robot 完成 課程主題一 . \n 課程主題二: 分別利用  Solvespace ,  NX1980  與  Onshape , 參考 行走機構文獻 , 設計一款可配合 meArm Robot 上下載運物件 (loading and unloading) 的行走機構. \n 課程主題三: 每一大組必須將 Github 上的大組倉儲與網站內容, 設法同步至電腦輔助設計室  Skylake MD790  電腦第三磁區中的  Fossil SCM server . \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Website', 'text': '倉儲 (Repository) and 網站 (Website) \n 使用分散式版次管理系統中的倉儲建立協同設計網站的特性: \n \n 可清楚記錄每一位成員對於協同設計流程的貢獻細節. \n 網頁中納入  Disqus , 可提升各頁面的互動性. \n 利用 Github, Gitlab, Bitbucket 與 Fossil SCM 同步協同設計倉儲內容, 可提升數位資料保全. \n 可回朔設計流程中的任一版本, 並呈現改版說明註記, 讓新成員自行研究探索. \n \n 每一成員均以 SSH 推送版本至各小組與各大組倉儲, 也可以採用 程式方法 集結成員改版內容. \n SSH push 基本概念: \n 以 git 作為帳號, 利用 secure shell 指令登入 github.com, 一旦近端的 private key 與 github.com 網站上使用者事先存放的 public key 屬於同一對, 則取得將近端版本推向 github.com 伺服器的權限, 對倉儲內容進行改版. \n 在近端若使用 Windows 操作系統, 可以採用 Putty 當作執行 secure shell 指令的工具, 但必須在啟動可攜系統時, 便透過 git 指令內建的系統環境變數 GIT_SSH 設為 plink.exe 所在路徑. 之後 git 就可透過 putty 以 secure shell 的方式推送版本. \n 而利用 putty 推送版本的過程需要網路連線與近端 private key 的所在路徑. 網路連線若在近端使用 IPv6 則必須額外設計能支援\xa0 IPv6 串接到 IPv4 網路協定的代理主機 (因為截至目前 github.com 只支援 IPv4 網路協定). 至於近端的 private key 必須是 putty 能讀取的格式, 而放到 github.com 上的 public key 則必須是 github.com 認可的 OpenSSH 格式. \n', 'tags': '', 'url': 'Website.html'}, {'title': 'Brython', 'text': '\n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 knova1 power_lotto spur spur_w_form stl_binary_ascii stl_writer turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Downloads', 'text': 'CoppeliaSim: \n CoppeliaSim Edu may ONLY be used by educational entities composed by following people and institutions: \n students, teachers and professors schools and universities \n Educational entities do NOT include companies, research institutions, non-profit organisations, foundations, etc. \n An educational entity may use CoppeliaSim Edu under following conditions: \n usage should be non-commercial \n cd2022 downloads are provided by cd2022 At mde \n CoppeliaSim Edu 4.1.0 Portable  (official and self-compiled versions) \n CoppeliaSim Edu 4.2.0 Portable  (official version) \n \n Fossil and Solvespace: \n fossil.exe and solvespace.exe  (self-compiled version) \n \n NX1980: \n NX1980 portable  (for @gm users only, file size: 3 GB, extracted size: 15.2 GB) \n \n Compile CoppliaSim Portable System: \n compile_copsim_for_pj2022.7z  (file size: 4 GB, extracted size: 14 GB) \n compile_copsim_for_cd2022.7z  (file size: 5GB, extracted size: 17.3 GB), 包含除了 NX1980 之外的所有課程相關可攜程式套件. \n 下載  PUTTY.7z  (下載 940 KB, 解開壓縮後 4 MB)', 'tags': '', 'url': 'Downloads.html'}]};