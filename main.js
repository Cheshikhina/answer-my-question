'use strict';

(function () {
  var answers = [
    'Да',
    'Конечно',
    'Возможно',
    'Точно',
    'Думаю да',
    'Скорее да',
    'Естественно',
    'Да, да и да!',
    'Однозначно',
    'Определенно',
    'Верно',
    'Ага',
    'Угу',
    'Несомненно',
    'Дык, ессстесственна!',
    'Безусловно',
    'Ну да',
    'Соглашусь',
    'Действительно', 
    'Разумеется',
    'Пусть будет так',
    'Такому быть',
    'Само собой',
    'Так точно',
    'Yes',
    'Даже не знаю что ответить',
    'Подумай прежде чем принимать решение',
    'Неоднозначно',
    'Не торопись, взвесь все за и против',
    'Не знаю',
    'Даже не догадываюсь',
    'Задай другой вопрос',
    'Сейчас это не важно',
    'Скоро вопрос отпадет сам собой',
    'Ну, нашли что спросить!',
    'На этот вопрос только ты знаешь верный ответ',
    'Попробуй еще раз',
    'Пока ответа нет',
    'Точно ли тебе нужен ответ на этот вопрос?',
    'Я пока промолчу',
    'В скором времени ты получишь ответ на этот вопрос',
    'Определенно ответить не могу',
    'Думаю тебе лучше не знать ответ',
    'От ответа воздезжусь...',
    'Странный вопрос',
    'И как понимать этот вопрос?',
    'Ответ на поверхности',
    'Просто попей кофе или чаю и успокойся',
    'Даже не спрашивай',
    'В скором времени ответа точно не получить, так что "Не парься, будь счастлив!"',
    'Нет',
    'Это плохо кончится',
    'Нетушки',
    'Отнюдь нет',
    'Определенно нет',
    'Как бы не так',
    'Ни в коем случае',
    'Ни за что на свете',
    'Только через мой труп',
    'Баба-Яга против, и я ее поддержу',
    'Это не выполнимо',
    'Увы',
    'Не сегодня',
    'Сожалею, но нет',
    'Таки нет',
    'Да нет',
    'Держи карман шире',
    'Раскатали губы',
    'Ещё чего',
    'Nope',
    'Вряд-ли', 
    'Куда там!',
    'Скорее нет',
    'Нереально',
    'Не-а',
  ];

  var pictures = [
    {url: "./img/1.jpg", description: "Бабушка в круге"},
    {url: "./img/2.jpg", description: "Белка в красной кофточке"},
    {url: "./img/3.jpg", description: "Хмурая свинка"},
    {url: "./img/4.jpg", description: "Выглядывающий кот"},
    {url: "./img/5.jpg", description: "Голубь Гуля"},
    {url: "./img/6.jpg", description: "Груный дракончик"},
    {url: "./img/7.jpg", description: "Хамелеон"},
    {url: "./img/8.jpg", description: "Два гуся из песни"},
    {url: "./img/9.jpg", description: "Бегемот в круге"},
    {url: "./img/10.jpg", description: "Фото суриката"},
    {url: "./img/11.jpg", description: "Енот жует арбуз"},
    {url: "./img/12.jpg", description: "Енот обнимает одеяло"},
    {url: "./img/13.jpg", description: "Спящая пчела"},
    {url: "./img/14.jpg", description: "Жираф с жевательной резинкой"},
    {url: "./img/15.jpg", description: "Жующая черепашка"},
    {url: "./img/16.jpg", description: "Загадочный кот"},
    {url: "./img/17.jpg", description: "Заинтересованная обезьяна"},
    {url: "./img/18.jpg", description: "Зайка обнимает тигра"},
    {url: "./img/19.jpg", description: "Уставший еж"},
    {url: "./img/20.jpg", description: "Засмотревшийся рожок"},
    {url: "./img/21.jpg", description: "Странная бабочка"},
    {url: "./img/22.jpg", description: "Идущая утка"},
    {url: "./img/23.jpg", description: "Його-ленивец"},
    {url: "./img/24.jpg", description: "Коала с чаем"},
    {url: "./img/25.jpg", description: "Кот с рыбой"},
    {url: "./img/26.jpg", description: "Кот симпотяга"},
    {url: "./img/27.jpg", description: "Уставшая белка"},
    {url: "./img/28.jpg", description: "Курочка с сумочкой"},
    {url: "./img/29.jpg", description: "Лама в очках и бабочке"},
    {url: "./img/30.jpg", description: "Лама пускает пузыри"},
    {url: "./img/31.jpg", description: "Лама, показывающая язык"},
    {url: "./img/32.jpg", description: "Лама"},
    {url: "./img/33.jpg", description: "Лев"},
    {url: "./img/34.jpg", description: "Лемур"},
    {url: "./img/35.jpg", description: "Лис и вентилятор"},
    {url: "./img/36.jpg", description: "Удивленный кролик"},
    {url: "./img/37.jpg", description: "Удивленная черепаха"},
    {url: "./img/38.jpg", description: "Медведь на машинке"},
    {url: "./img/39.jpg", description: "Милый пес"},
    {url: "./img/40.jpg", description: "Милый жирафик"},
    {url: "./img/41.jpg", description: "Мишка в желтом плаще"},
    {url: "./img/42.jpg", description: "Мишка готовит еду"},
    {url: "./img/43.jpg", description: "Мишка делает Опа"},
    {url: "./img/44.jpg", description: "Мишка делает сердечко"},
    {url: "./img/45.jpg", description: "Мишка с мороженным"},
    {url: "./img/46.jpg", description: "Модная птичка"},
    {url: "./img/47.jpg", description: "Морская свинка и печеника"},
    {url: "./img/48.jpg", description: "Панда в боксерских перчатках"},
    {url: "./img/49.jpg", description: "Морской котик"},
    {url: "./img/50.jpg", description: "Мохнатая точка с глазами"},
    {url: "./img/51.jpg", description: "Обезьяна на туалете"},
    {url: "./img/52.jpg", description: "Офигевшая коала"},
    {url: "./img/53.jpg", description: "Удивленная лама"},
    {url: "./img/54.jpg", description: "Пристыженный слон"},
    {url: "./img/55.jpg", description: "Птичка в желтом платочке"},
    {url: "./img/56.jpg", description: "Странное животное"},
    {url: "./img/57.jpg", description: "Рыба с шипами и огромными глазами"},
    {url: "./img/58.jpg", description: "Селфи Лама"},
    {url: "./img/59.jpg", description: "Сердитый кот"},
    {url: "./img/60.jpg", description: "Синяя птичка в белую крапинку"},
    {url: "./img/61.jpg", description: "Слон в цветах"},
    {url: "./img/62.jpg", description: "Слоненок с леденцом"},
    {url: "./img/63.jpg", description: "Слушающий музыку медведь"},
    {url: "./img/64.jpg", description: "Собака в летном шлеме"},
    {url: "./img/65.jpg", description: "Собака с палочкой"},
    {url: "./img/66.jpg", description: "Собака"},
    {url: "./img/67.jpg", description: "Сова говорит peace"},
    {url: "./img/68.jpg", description: "Сова"},
    {url: "./img/69.jpg", description: "Солнышко"},
    {url: "./img/70.jpg", description: "Спящая лисица"},
    {url: "./img/71.jpg", description: "Коала в листиках"},
    {url: "./img/72.jpg", description: "Маленькая черепашка-нинзя"},
    {url: "./img/73.jpg", description: "Пингвин с самолетиком"},
    {url: "./img/74.jpg", description: "Цыпленок и желток"},
    {url: "./img/75.jpg", description: "Хрюша"},
    {url: "./img/76.jpg", description: "Мышь"},
    {url: "./img/77.jpg", description: "Мышь в ботинках"},
    {url: "./img/78.jpg", description: "Цыпленок в шляпке"},
    {url: "./img/79.jpg", description: "Недовольная хрюша"},
    {url: "./img/80.jpg", description: "Facepalm от мишки"},
  ];
  
  var NUMBER_ANSWERS = 70;
  var NUMBER_PICTURES = 80;
  var KeyCode = {
    ESC: 27,
  };
  
  var questionButton = document.querySelector('.question__button');
  var questionSection = document.querySelector('.question');
  
  var getAnswer = function (answers, pictures) {
    var answer = {};
    answer.text = answers[Math.floor(Math.random() * NUMBER_ANSWERS)];
    answer.picture = pictures[Math.floor(Math.random() * NUMBER_PICTURES)];
    return answer;
  };
  
  var similarAnswerTemplate = document.querySelector('#answer')
  .content
  .querySelector('.answer');
  var similarListElement = document.querySelector('.answers');
  
  var getNewAnswer = function (answers, pictures) {
    var answer = getAnswer(answers, pictures);
    var answerElement = similarAnswerTemplate.cloneNode(true);
    
    answerElement.querySelector('.answer__img img').src = answer.picture.url;
    answerElement.querySelector('.answer__img img').alt = answer.picture.description;
    answerElement.querySelector('.answer__text').textContent = answer.text;
    
    var fragment = document.createDocumentFragment();
    fragment.appendChild(answerElement);

    similarListElement.appendChild(fragment);
  };

  var clickQuestionHander = function (evt) {
    evt.preventDefault();
    questionSection.classList.add('visually-hidden');
    openAnswerPopup();
  };
  
  var openAnswerPopup = function () {
    getNewAnswer(answers, pictures);

    var answerButton = document.querySelector('.answer__button');
    
    answerButton.addEventListener('click', function () {
      closeAnswerPopup();
    });

    
    var removeElementsByClass = function () {
      var elements = document.querySelector(".answers").children;
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    };
    
    var answerCloseEscHandler = function (evt) {
      if (evt.keyCode === KeyCode.ESC) {
        closeAnswerPopup();
      }
    };
    
    document.addEventListener('keydown', answerCloseEscHandler);
    
    var removeCloseEsc = function () {
      document.removeEventListener('keydown', answerCloseEscHandler);
    };
    
    var closeAnswerPopup = function () {
      questionSection.classList.remove('visually-hidden');
      removeElementsByClass();
      removeCloseEsc();
    };
  };

  questionButton.addEventListener('click', clickQuestionHander);

})();
