// data.js
const shows = [
  {
    title: "ПДД — это жизнь",
    tag: "Спектакль",
    theater: "Театр «Молодой человек»",
    age: "1-4 класс",
    duration: "45 минут",
    price: "300 ₽",
    minimum: "Минимальная заявка — от 100 зрителей.",
    poster: "ПДД",
    description:
      "Интерактивный спектакль-урок о безопасности на дорогах, ответственности и правилах дорожного движения в понятном театральном формате.",
    photos: [
      {
        url: "assets/pdd.jpg", // Замените на реальный URL/путь к фото (например: "images/pdd-1.jpg")
        pos: "center 32%",
      },
    ],
  },
   {
    title: "Приключения жёлтого воздушного шарика",
    tag: "Спектакль",
    theater: "Театр «МО»",
    age: "1-6 класс",
    duration: "45 минут",
    price: "350 ₽",
    minimum: "Минимальная заявка — от 100 зрителей.",
    poster: "Приключения жёлтого воздушного шарика",
    description:
      "В нашем театре есть спектакль «Приключения жёлтого воздушного шарика» — это интерактивная история, в которой дети не просто смотрят спектакль, а сами становятся его участниками: играют с героями, выполняют весёлые задания на взаимодействие и сплочение, танцуют и много веселятся ❤️",
    photos: [
      {
        url: "assets/sharik.jpg", // Замените на реальный URL/путь к фото (например: "images/pdd-1.jpg")
        pos: "center 31%",
      },
    ],
  },
  {
    title: "Наш Рыжий",
    tag: "Спектакль",
    theater: "Театр «МО»",
    age: "9-11 класс",
    duration: "45 минут",
    price: "350 ₽",
    minimum: "Минимальная заявка — от 100 зрителей.",
    description:
      "",
    photos: [
      {
        url: "assets/Nash/1.jpg", 
        pos: "5%",
      },
      {
        url: "assets/Nash/2.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Nash/3.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Nash/4.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Nash/5.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Nash/6.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
    ],
  },
  {
    title: "Подвиги маленьких сердец",
    tag: "Спектакль",
    theater: "Театр «МО»",
    age: "1-9 класс",
    duration: "45 минут",
    price: "350 ₽",
    minimum: "Минимальная заявка — от 100 зрителей.",
    description:
      "",
    photos: [
      {
        url: "assets/Podvigi/1.jpg", 
        pos: "15%",
      },
      {
        url: "assets/Podvigi/2.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Podvigi/3.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Podvigi/4.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
    ],
  },
    {
    title: "Каренина",
    tag: "Спектакль",
    theater: "Театр «МО»",
    age: "8-11 класс",
    duration: "45 минут",
    price: "350 ₽",
    minimum: "Минимальная заявка — от 100 зрителей.",
    description:
      "",
    photos: [
      {
        url: "assets/Karenina/1.jpg", 
        pos: "5%",
      },
      {
        url: "assets/Karenina/2.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Karenina/3.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Karenina/4.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Karenina/5.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
            {
        url: "assets/Karenina/6.jpg", 
        bg: "linear-gradient(145deg,#17201a,#667765 55%,#171a18)",
      },
    ],
  },
];

const partners = [
  {
    name: "Театр «Молодой человек»",
    city: "Ижевск",
    role: "официальный партнёр проекта",
    mark: "МЧ",
    description:
      "Профессиональный муниципальный театр Ижевска с богатым репертуаром для детей и молодёжи. Коллектив регулярно участвует в региональных образовательных инициативах и имеет большой опыт проведения выездных показов.",
    stats: [
      { label: "Опыт", val: "30+ лет" },
      { label: "Спектакли", val: "15+ в репертуаре" },
      { label: "Формат", val: "Выезд с оборудованием" },
    ],
  },
  {
    name: "Собственная труппа «Диалог»",
    city: "Ижевск",
    role: "выездной коллектив",
    mark: "Д",
    description:
      "Мобильная актерская группа, сформированная специально для работы в школьных актовых залах. Быстрое развертывание профессионального звукового и светового оборудования в любых условиях.",
    stats: [
      { label: "Мобильность", val: "100% автономно" },
      { label: "Показов", val: "80+ за сезон" },
      { label: "Аудитория", val: "1–11 классы" },
    ],
  },
];
