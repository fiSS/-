window.addEventListener('DOMContentLoaded', function() {              //load говорит js, что сейчас страница будет загружаться и только после того 
                                                                    //как загрузиться полностью всё до последней картинки, js скрипт будет выполняться 
     'use strict';                                                   //DomContentLoaded это событие срабатывает, когда полностью загрузилась DOM структура документа
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        photosFromTrips = document.getElementsByClassName('slider-item fade'),
        prevFoto = document.getElementsByClassName('arrow-left'),
        nextFoto = document.getElementsByClassName('arrow-right');
        //console.log(photosFromTrips[1]);
        console.log(prevFoto);
        

               
    function hideTabContent(a) {
        for(let i = 0; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); //удаляем класс show
            tabContent[i].classList.add('hide'); //скроем все елементы tabContent со страницы
        }
    }

hideTabContent(1);                      //скрыват все tabContent кроме первого

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')){
        tabContent[b].classList.remove('hide'); //удаляем(скрываем) класс show
        tabContent[b].classList.add('show');
    }
}

info.addEventListener('click', function(event){
    let target = event.target;
    if(target && target.classList.contains('info-header-tab'))  {
        for(let i = 0; i < tab.length; i++) {   //цикл будет работать до момента когда закончатся tab-ы
            if(target == tab[i]){
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        } 
    }
});
}); 
