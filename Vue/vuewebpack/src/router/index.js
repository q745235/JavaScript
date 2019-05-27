import Vue from 'vue'
import VueRouter from 'vue-router'
// 官方元件

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';
// 自訂的分頁文件

Vue.use(VueRouter);

export default new VueRouter({
	// mode:"history",
	linkActiveClass: 'active',
  routes: [
    {
      name: '首頁', // 元件呈現的名稱
      path: '/index',  // 對應的虛擬路徑
      component: Home,  // 對應的元件
    },
    {
      // name: '分頁', 
      path: '/page', 
			// component: Page,
			components: {
				default: Page,
				menu: Menu,
			},
			children: [
				{
					name: '卡片 1', // 元件呈現的名稱
					path: '',  // 對應的虛擬路徑
					component: child,  // 對應的元件
				},
				{
					name: '卡片 2', // 元件呈現的名稱
					path: 'child2',  // 對應的虛擬路徑
					component: child2,  // 對應的元件
				},
				{
					name: '卡片 3', // 元件呈現的名稱
					path: 'child3',  // 對應的虛擬路徑
					component: child3,  // 對應的元件
				},
			]
    },
  ],
});