# Табы на нативном JS, с динамическим добавлением елементов на страницу.

# USAGE
 1. добавить в  HTML: div class="info-header" новый class div class="info-header-tab" какой то новый контент/div,<br>
 2.  в css есть 2 класса: content .info .hide и content .info .show(один скрывает другой отображает табы на странице)
 3. добавить новый div class="info-tabcontent fade" в html и напольнить по аналогии с имеющимеся divam-и,<br>
 4. js: получаем елементы которые будут использоваться:<br>
 	let tab = document.querySelectorAll('.info-header-tab'),<br>
            info = document.querySelector('.info-header'),<br>
             tabContent = document.querySelectorAll('.info-tabcontent'<br>
   function hideTabContent скрывает все елементы tabContent со страницы, кроме первого hideTabContent("1"),  
  цикл for(let i = 0; i < tab.length; i++) будет работать пока не закончатся tab-ы, вызываем функцию hideTabContent(1) и оставляем только   один таб.<br>	
 5. Фунция function showTabContent, показывает какой то определенный таб<br>
 6. Назначение обработчика событий при клике на каждый из данных табов.(применим к родителю)
 	info.addEventListener('click', function(event)<br>
 7. Необходимо определить програмно, что елемент info-tabcontent связан с таким-то info-header-tab ИТД.<br>
   как только таргет совпадет с тем табом который перебираем, только в том случае будут выполнены каки то действия.<br>
   цикл закончится тогад, когда закончатся табы for(let i = 0; i < tab.length; i++)
   если то куда мы нажали совпадает с определенным табом, который перебираем target == tab[i], то выполненим действия<br>
   скроем все табы hideTabContent(0), и showTabContent в качестве аргумента передаем (i)(это какой то таб) и точно такой же таб показываем.
