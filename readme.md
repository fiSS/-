# Табы на нативном JS, с динамическим добавлением елементов на страницу.

# USAGE
 1:добавить в  HTML: div class="info-header" новый class div class="info-header-tab" какой то новый контент/div,
 2: в css есть 2 класса: content .info .hide и content .info .show(один скрывает другой отображает табы на странице)
 3:добавить новый div class="info-tabcontent fade" в html и напольнить по аналогии с имеющимеся divam-и,
js: function hideTabContent скрывает все елементы tabContent со страницы, кроме первого hideTabContent("1"),  
		цикл for(let i = 0; i < tab.length; i++) будет работать пока не закончатся tab-ы.	
	
