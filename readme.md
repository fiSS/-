Табы нв нативном JS, с динамическим добавлением елементов на страницу:
 1.добавить в  HTML: div class="info-header" новый class div class="info-header-tab" какой то новый контент/div
 2.добавить новый <div class="info-tabcontent fade"> в html и напольнить по аналогии с другими.
js: function hideTabContent скрывает все елементы tabContent со страницы, кроме певого hideTabContent("1");  
		цикл for(let i = 0; i < tab.length; i++) будет работать пока не закончатся tab-ы.	
	
