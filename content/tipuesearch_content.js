var tipuesearch = {"pages": [{'title': 'About', 'text': '機械設計工程系大二協同產品設計實習課程. \n 課程網頁:  https://mde.tw/cd2022 \n 課程倉儲:  https://github.com/mdecourse/cd2022 \n 課程規劃與作業:  https://github.com/mdecourse/cd2022/discussions \n 課程討論區:  https://gitter.im/mdecourse/cd2022 \n 教學影片  (for local area network only) \n \n 課程簡介: \n 協同產品設計實習承接電腦輔助設計實習課程, 著重在探討多人模式下, 如何有效執行與機電系統設計相關的產品開發流程. \n 本課程以每四人為一小組, 兩小組為一大組執行機電系統模型設置專案, 任務一將延續  cad2021  ( Hw ,  Final ) 中的 meArm Robot 架構 (同  uarm ,  Onshape uarm  與  Evoarm ) 完成 課程主題一 . \n (1)  整理 meArm 零組件檔案 \n (2)  meArm pick and place 模擬 \n (3)  Python remote API 模擬  (CoppeliaSim  4.1.0 ,  4.2.0 ), 直接以 Python script 操控 ( 4.3.0 ) \n 課程主題二: 分別利用  Solvespace ,  NX1980  與  Onshape , 參考 行走機構文獻 , 設計一款可配合 meArm Robot 上下載運物件 (loading and unloading) 的行走機構. \n 課程主題三: 每一大組必須將 Github 上的大組倉儲與網站內容, 設法同步至電腦輔助設計室  Skylake MD790  電腦第三磁區中的  Fossil SCM server . \n 建模與模擬 (Modeling and Simulation): \n 現代產品幾乎都是植基於數位工程 (Digital Engineering) 下的產物, 意即都是先經過建模 (Modeling) 並透過模擬 (Simulaion) 確認其模型功能符合需求後, 才逐一實體化 (Realization). \n 建立模型的過程是希望利用數位方法來表達物體的真實情境, 當數位模型導入各種狀態變數 (State Variables), 在特定時間內的表現即為模擬 (Simulation), 若此模型的模擬結果越接近真實, 則此一模型即可稱為真實世界的  digital twin . \n 數位模型建立過程可以透過網路無遠弗屆傳遞, 可以同步或非同步協同 (Synchronous or Asynchronous Collaboration) , 也可以虛實整合 (cyber-physical integration). \n 數位模型的模擬即透過運算呈現結果, 其目標在令其貼近所代表的真實情境. 由於真實世界的部分情境可用數學模型簡化後加以呈現, 意即數位模型希望貼近真實世界, 產品設計者必須運用已知或創新方法建立適用的數位運算模型 (Digital Computation Model). \n 電腦輔助設計 (Computer Aided Design) 的目的在利用電腦呈現建立模型過程 (Model Creation Process) 的全貌 (Whole Picture). \n 協同產品設計 (Collaborative Product Design) 即採多人協同模式執行電腦輔助設計. \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Website', 'text': '倉儲 (Repository) and 網站 (Website) \n 使用分散式版次管理系統中的倉儲建立協同設計網站的特性: \n \n 可清楚記錄每一位成員對於協同設計流程的貢獻細節. \n 網頁中納入  Disqus , 可提升各頁面的互動性. \n 利用 Github, Gitlab, Bitbucket 與 Fossil SCM 同步協同設計倉儲內容, 可提升數位資料保全. \n 可回朔設計流程中的任一版本, 並呈現改版說明註記, 讓新成員自行研究探索. \n \n 每一成員均以 SSH 推送版本至各小組與各大組倉儲, 也可以採用 程式方法 集結成員改版內容. \n SSH push 基本概念: \n 以 git 作為帳號, 利用 secure shell 指令登入 github.com, 一旦近端的 private key 與 github.com 網站上使用者事先存放的 public key 屬於同一對, 則取得將近端版本推向 github.com 伺服器的權限, 對倉儲內容進行改版. \n 在近端若使用 Windows 操作系統, 可以採用 Putty 當作執行 secure shell 指令的工具, 但必須在啟動可攜系統時, 便透過 git 指令內建的系統環境變數 GIT_SSH 設為 plink.exe 所在路徑. 之後 git 就可透過 putty 以 secure shell 的方式推送版本. \n 而利用 putty 推送版本的過程需要網路連線與近端 private key 的所在路徑. 網路連線若在近端使用 IPv6 則必須額外設計能支援\xa0 IPv6 串接到 IPv4 網路協定的代理主機 (因為截至目前 github.com 只支援 IPv4 網路協定). 至於近端的 private key 必須是 putty 能讀取的格式, 而放到 github.com 上的 public key 則必須是 github.com 認可的 OpenSSH 格式.', 'tags': '', 'url': 'Website.html'}, {'title': 'Brython', 'text': 'Siemens and Python related repositories \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar guess_a_number hw1_1 hw1_2 Keycode knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer Tetris turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Rust', 'text': 'https://rust-lang.tw/book-tw/title-page.html  ( 英文版 ) \n http://mde.tw/wcm2022/content/Rust.html \n https://users.rust-lang.org/t/rust-for-plc-programming/27331/6 \n https://replit.com/   \n', 'tags': '', 'url': 'Rust.html'}, {'title': 'NX1980', 'text': 'https://mde.tw/cad2021_hw/content/NX1980.html \n 有關 NX \n NX Tutorial \n NX Tutorial 2 \n NX Tutorial 3 \n In German: \n \n \n In English: \n \n \n \n \n \n Pattern: \n \n \n In Turkish: \n \n 適合關掉聲音觀看: \n Modeling: \n \n Move Face: \n \n', 'tags': '', 'url': 'NX1980.html'}, {'title': 'Automation', 'text': 'https://new.siemens.com/global/en/products/automation/pc-based/iot-gateways/iot2000.html \n \n \n \n \n \n \n https://github.com/gaphor/gaphor \n https://gaphor.org/download.html \n https://sysml.org/.res/docs/specs/OMGSysML-v1.6-19-11-01.pdf \n https://github.com/gaphor/gaphor \n https://gaphor.org/download.html \n \n https://pygobject.readthedocs.io/en/latest/index.html', 'tags': '', 'url': 'Automation.html'}, {'title': 'Onshape', 'text': '\n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'MBSE', 'text': 'Model Based System Engineering \n \n From Document-based to Model-based product design: \n \n \n \n 2020_Simulator_for_Articulate_Robots.pdf \n', 'tags': '', 'url': 'MBSE.html'}, {'title': 'Arduino', 'text': 'Desktop simulator: \n https://www.sites.google.com/site/unoardusim/services \n Online Arduino simulator:\xa0 \n https://wokwi.com/ \xa0 \n https://github.com/orgs/wokwi/repositories \n Picsimlab: \n https://github.com/lcgamboa/picsimlab \n https://lcgamboa.github.io/ \n https://mplabxpress.microchip.com/mplabcloud/ide', 'tags': '', 'url': 'Arduino.html'}, {'title': 'Programming', 'text': 'https://www.toptal.com/robotics/programming-a-robot-an-introductory-tutorial \n https://github.com/mdecourse/sobot-rimulator \n https://mde.tw/cp2021/content/Cython.html \n http://mde.tw/cp2021/content/C.html \n Python 編譯環境修正 \n Python 與 NXOpen Python API \n web_based_customized Design.pdf \n 2022.07 之前放在 @gm 的 video 教學影片應該仍可執行 (之後將會配合 Google Drive 取消 unlimited storage 縮減容量而遭刪除). \n http://mde.tw/cad2020/content/W5Video.html', 'tags': '', 'url': 'Programming.html'}, {'title': 'Downloads', 'text': "綜合第一工程館八樓電腦輔助設計室純 IPv6 網路設定:  https://mde.tw/wcm2022/content/Network.html \n CoppeliaSim: \n CoppeliaSim Edu may ONLY be used by educational entities composed by following people and institutions: \n students, teachers and professors schools and universities \n Educational entities do NOT include companies, research institutions, non-profit organisations, foundations, etc. \n An educational entity may use CoppeliaSim Edu under following conditions: \n usage should be non-commercial \n cd2022 downloads are provided by cd2022 At mde \n CoppeliaSim Edu 4.1.0 Portable  (official and self-compiled versions) \n CoppeliaSim Edu 4.2.0 Portable  (official version) \n CoppeliaSim Edu 4.3.0 Portable  ( What's new ) \n 內建 script 除了支援 Lua, 同時 支援 Python  ( Scripts in Lua and Python ), 但需在啟動前設定 system/usrset.txt 中的 defaultPython =\xa0 Y:/Python395/python.exe, 且安裝  pyzmq  與  cbor  等模組. \n pip install pyzmq cbor \n regular api reference \n \n Fossil and Solvespace: \n fossil.exe and solvespace.exe  (self-compiled version) \n \n NX1980: \n NX1980 portable  (for @gm users only, file size: 3 GB, extracted size: 15.2 GB) \n \n Compile CoppliaSim Portable System: \n compile_copsim_for_pj2022.7z  (file size: 4 GB, extracted size: 14 GB) \n compile_copsim_for_cd2022.7z  (file size: 5 GB, extracted size: 17.3 GB), 包含除了 NX1980 之外的所有課程相關可攜程式套件. \n 下載  PUTTY_0.74.7z  (下載 940 KB, 解開壓縮後 4 MB) \n 下載  PUTTY_0.76.7z  (下載 1 MB, 解開壓縮後 4.36 MB) \n 請注意!! 版本很重要, 使用 PUTTY 0.74 建立的 keys, 無法在 0.76 版中使用. \n \n Webots \n Webots 使用授權 較  CoppeliaSim 使用授權 寬鬆. \n Webots 對於全球資訊網的支援(  https://robotbenchmark.net/ ) 較 CoppeliaSim 佳 (CoppeliaSim 自 4.3.0 rev2 透過  three.js ,  支援瀏覽器前端展示 ). \n CoppeliaSim 執行時所需獨立顯卡的要求 ( requirements ) 較 Webots ( requirements ) 低. \n 下載  webots_2022a.7z  (file size: 315 MB, extracted size: 1.7 GB)", 'tags': '', 'url': 'Downloads.html'}]};