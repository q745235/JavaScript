四個表:  
1.electionList_tb: 選舉名稱, 開始時間, 結束時間, 是否結束   
2.candidateList_tb: 選舉名稱, 候選人, 得票數  
3.voterList_tb: ID, 身分證, email, 是否是管理員  
4.votes_tb: 選舉名稱, 候選人, 投票人  

candidateList_tb 的 得票數 方便管理員常常查得票數  
votes_tb 則是用於送信和查某選舉投給某候選人的投票人  

步驟:   
1.搭建環境 框架用 express, 資料庫用 MySQL, 測試用 jest  
2.依麵向的操作者分 router   
3.從普通用戶的註冊和投票下手   
4.測試功能    
5.增加管理員的功能  
6.測試功能  
7.添加權限  
8.測試  
