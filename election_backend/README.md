<h1>前言:</h1>

會員投票用的後端程式  
與前端串接的API 文擋在 [API.docx](https://github.com/q745235/JavaScript/blob/master/election_backend/API.docx)

<h2>終端機功能:</h2>  

安裝套件:

    yarn
開發用環境:

    yarn dev   
正式環境生產用: 

    yarn start  
編譯程式:

    yarn build  
測試 ? 程式:

    yarn test ?   
創建 MySQL 表單:

    yarn sync

<h2>四個記錄數據的表:</h2> 

>1.electionList_tb:   
表格: 選舉名稱, 開始時間, 結束時間, 是否結束  
用途: 記錄選舉相關事務  
2.candidateList_tb:   
表格: 選舉名稱, 候選人, 得票數  
用途: 方便管理員常常查得票數   
3.voterList_tb:   
表格: Id, 身分證, email, 是否是管理員  
用途: 記錄帳號事務  
4.votes_tb:   
表格: 選舉名稱, 候選人, 投票人  
用途: 記錄某選舉有哪些投票人   

<h2>思考步驟:  </h2> 

>1.搭建環境 框架用 express, 資料庫用 MySQL, 測試用 jest  
>2.依面向的操作者分 router   
>3.從普通用戶的註冊和投票下手(程式的最終目的)   
>4.測試功能    
>5.增加管理員的功能(從操作選舉功能到查詢功能)  
>6.測試功能  
>7.添加權限  
>8.測試  
>9.成品 
