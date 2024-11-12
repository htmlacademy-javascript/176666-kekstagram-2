const PHOTO_COUNT = 25;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const DESCRIPTIONS = [
  'Закат на пляже - Оранжевые и розовые оттенки заката отражаются в спокойной воде, создавая умиротворяющую атмосферу.',
  'Горный пейзаж - Величественные горы покрыты снежными шапками, на переднем плане зеленеют сосны.',
  'Городская улица - Оживленная улица с кафе и магазинами, украшенная фонарями, создающая уютный вечерний настрой.',
  'Поле цветов - Яркое поле с цветущими подсолнухами, под ярким солнечным светом и синим небом.',
  'Дети играют в парке - Веселые дети на качелях и горках, радостно смеясь, наслаждаются солнечным днем.',
  'Портрет животного - Близкий план улыбающейся собаки, ее глаза полны жизни и любви.',
  'Кулинарный шедевр - Элегантно оформленная тарелка с пастой, посыпанной зеленью и тертым сыром.',
  'Лес осенью - Деревья, устланные золотыми листьями, создают сказочную атмосферу осеннего леса.',
  'Спортивное событие - Энергия и азарт на лице игрока в решающий момент матча, публика ликует на трибунах.',
  'Романтический ужин - Завораживающая сцена: свечи, вино и великолепный вид на город из ресторана.',
  'Научный эксперимент - Увлекательный момент, когда ученый наблюдает за реакцией в колбе, полный радости и удивления.',
  'Свадебная церемония - Счастливая пара, обменяющая клятвы на фоне цветочного декора.',
  'Путешествие - Группа туристов на фоне знаменитого памятника, фиксируя счастливые моменты на фото.',
  'Зимний пейзаж - Снежный лес, усыпанный искрящимся снегом, создаёт атмосферу сказки.',
  'Семейное фото - Улыбающаяся семья, совместно позирующая на природе, полная счастья и любовных связей.',
  'Кофейня - Уютный уголок с ароматным кофе и пирожными, идеально подходящий для дружеской встречи.',
  'Водопад - Прекрасный водопад, стремящийся вниз, окруженный зелеными скалами и окаймленный радугой.',
  'Спорт на открытом воздухе - Энергичные люди занимаются йогой на зеленом травяном поле под солнечным светом.',
  'Технологические новинки - Современный гаджет, установленный на минималистичном столе, демонстрирующий последние достижения.',
  'Культурное мероприятие - Яркий фестиваль с костюмированными участниками, демонстрирующими традиционные танцы.',
  'Рынок - Разнообразие свежих овощей и фруктов на местном рынке, создающее атмосферу жизни и уюта.',
  'Путешествие по воде - Лодка скользит по спокойной воде, отражая облака и горы вокруг.',
  'Спокойное утро - Очаровательный вид на чайную чашку на фоне окна, пропускающего утренний свет.',
  'Фестиваль искусств - Художники, создающие свои шедевры на холсте, погруженные в атмосферу творчества.',
  'Ночная небоскрёб - Городские огни мерцают под звездным небом, создавая захватывающий городской ландшафт.'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 30);


const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => {
  const photoId = generatePhotoId();
  const photo = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
  };

  return photo;
};

const photos = () => Array.from({length: PHOTO_COUNT}, createPhoto);

photos();