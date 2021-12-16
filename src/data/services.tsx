// 1. Dentistry
import Dentistry from "pages/InfoPage/components/Dentistry";
import icon1 from "assets/images/icons/services/dentistry.png";
import img1 from "assets/images/services/dentistry.png";
import imgBig1 from "assets/images/services/dentistry_big.png";
// 2. Prosthesis
import Prosthesis from "pages/InfoPage/components/Prosthesis";
import icon2 from "assets/images/icons/services/prosthesis.png";
import img2 from "assets/images/services/prosthesis.png";
import imgBig2 from "assets/images/services/prosthesis_big.png";
// 3. Orthodontics
import Orthodontics from "pages/InfoPage/components/Orthodontics";
import icon3 from "assets/images/icons/services/braces.png";
import img3 from "assets/images/services/orthodontics.png";
import imgBig3 from "assets/images/services/orthodontics_big.png";
// 4. Hygiene Tooth cleaning
import Hygiene from "pages/InfoPage/components/Hygiene";
import icon4 from "assets/images/icons/services/tooth-cleaning.png";
import img4 from "assets/images/services/hygiene.png";
import imgBig4 from "assets/images/services/hygiene_big.png";
// 5. Prevention
import Prevention from "pages/InfoPage/components/Prevention";
import icon5 from "assets/images/icons/services/prevention.png";
import img5 from "assets/images/services/prevention.png";
import imgBig5 from "assets/images/services/prevention_big.png";
// 6. Pediatric dentistry
import Pediatric from "pages/InfoPage/components/Pediatric";
import icon6 from "assets/images/icons/services/baby-teeth.png";
import img6 from "assets/images/services/kindsDent.png";
import imgBig6 from "assets/images/services/kindsDent_big.png";
// 7. Laser dentistry
import Laser from "pages/InfoPage/components/Laser";
import icon7 from "assets/images/icons/services/laser_dentistry.png";
import img7 from "assets/images/services/laser.png";
import imgBig7 from "assets/images/services/laser_big.png";
// 8. Surgery
import Surgery from "pages/InfoPage/components/Surgery";
import icon8 from "assets/images/icons/services/doctor.png";
import img8 from "assets/images/services/surgery.png";
import imgBig8 from "assets/images/services/surgery_big.png";
// 9. Aesthetic dentistry
import Aesthetic from "pages/InfoPage/components/Aesthetic";
import icon9 from "assets/images/icons/services/smile.png";
import img9 from "assets/images/services/aesthetic.png";
import imgBig9 from "assets/images/services/aesthetic_big.png";
// 10. Treatment under a microscope
import Microscope from "pages/InfoPage/components/Microscope";
import icon10 from "assets/images/icons/services/treatment_microscope.png";
import img10 from "assets/images/services/microscope.png";
import imgBig10 from "assets/images/services/microscope_big.png";
// 11. Plasma therapy and periodontology
import Plasma from "pages/InfoPage/components/Plasma";
import icon11 from "assets/images/icons/services/plasma_therapy.png";
import img11 from "assets/images/services/plasma.png";
import imgBig11 from "assets/images/services/plasma_big.png";

export interface CostType {
  title: string;
  price: {
    from: number;
    to?: number;
  };
}

export enum EnumSeviceID {
  dentistry = "dentistry",
  prosthesis = "prosthesis",
  orthodontics = "orthodontics",
  hygiene_bleaching = "hygiene_bleaching",
  prevention = "prevention",
  pediatric_dentistry = "pediatric_dentistry",
  laser_dentistry = "laser_dentistry",
  surgery = "surgery",
  aesthetic_dentistry = "aesthetic_dentistry",
  treatment_under_microscope = "treatment_under_microscope",
  plasma_therapy_periodontology = "plasma_therapy_periodontology",
}

export interface SeviceType {
  id: EnumSeviceID;
  title: string;
  description: string;
  iconURL: string;
  imageURL: string;
  cost: number;
  bigImageURL: string;
  costs?: CostType[];
  children?: JSX.Element;
}

export const SERVICES: SeviceType[] = [
  // dentistry
  {
    id: EnumSeviceID.dentistry,
    title: "Лікування зубів",
    description:
      "В «Стоматології лікаря Ляшука» успішно лікують карієс та його ускладнення за допомогою сучасного обладнання.",
    iconURL: icon1,
    imageURL: img1,
    cost: 900,
    bigImageURL: imgBig1,
    children: <Dentistry />,
    costs: [
      { title: "Консультація лікаря-пародонтолога", price: { from: 200 } },
      {
        title: "Прицільний рентгенівський знімок (радіовізіографія)",
        price: { from: 2100 },
      },
      { title: "Анестезія ін’єкційна", price: { from: 200 } },
      { title: "Накладання рабердаму", price: { from: 100 } },
      { title: "Лікування карієсу", price: { from: 900, to: 1400 } },
      {
        title: "Постановка скловолоконного штифта і формування культі зуба",
        price: { from: 1800 },
      },
      {
        title: "Естетична реставрація фронтальних зубів ",
        price: { from: 1500, to: 1800 },
      },
      {
        title:
          "Лікування кореневих каналів (проходження ендомотором, медикаментозна обробка, пломбування гутаперчею) 1 кореневого зуба",
        price: { from: 2500 },
      },
      {
        title: "2 кореневого зуба",
        price: { from: 3000 },
      },
      { title: "3 кореневого зуба", price: { from: 3500 } },
      {
        title: "Невідкладна допомога при пульпіті та періодонтиті",
        price: { from: 600 },
      },
    ],
  },
  // prosthesis
  {
    id: EnumSeviceID.prosthesis,
    title: "Протезування",
    description:
      "Виготовлення металокерамічних коронок, безметалевих коронок, керамічних вінірів, коронок на імплантаті, виготовлення протезів.",
    iconURL: icon2,
    imageURL: img2,
    cost: 4000,
    bigImageURL: imgBig2,
    children: <Prosthesis />,
    costs: [
      {
        title: "Консультація лікаря-стоматолога-ортопеда",
        price: { from: 200 },
      },
      { title: "Виготовлення металокерамічної коронки", price: { from: 4000 } },
      {
        title: "Виготовлення безметалевої коронки на основі оксиду цирконія",
        price: { from: 7000 },
      },
      {
        title: "Виготовлення безметалевої коронки на основі прескераміки",
        price: { from: 7000 },
      },
      { title: "Вінір керамічний", price: { from: 7500 } },
      {
        title: "Металокерамічна коронка на імплантаті (без вартості абатменту)",
        price: { from: 5400 },
      },
      {
        title:
          "Коронка на основі оксиду цирконію на імплантаті (без вартості абатменту)",
        price: { from: 8000 },
      },
      {
        title: "Виготовлення акрилового знімного протезу",
        price: { from: 5500 },
      },
      {
        title: "Виготовлення ацетатного знімного протезу",
        price: { from: 8000 },
      },
      {
        title: "Виготовлення нейлонового знімного протезу",
        price: { from: 6000 },
      },
    ],
  },
  // orthodontics
  {
    id: EnumSeviceID.orthodontics,
    title: "Ортодонтія",
    description:
      "Зняття відбитків, виготовлення діагностичних гіпсових моделей, пластинковий апарат з гвинтом, фіксація металевої брекет-системи.",
    iconURL: icon3,
    imageURL: img3,
    cost: 4600,
    bigImageURL: imgBig3,
    children: <Orthodontics />,
    costs: [
      {
        title: "Консультація лікаря-ортодонта",
        price: { from: 200 },
      },
      {
        title: "Зняття відбитків, виготовлення діагностичних гіпсових моделей",
        price: { from: 500 },
      },
      { title: "Знімний пластинковий апарат з гвинтом", price: { from: 4600 } },
      {
        title: "Фіксація металевої брекет-системи (1 щелепа)",
        price: { from: 9500 },
      },
      {
        title: "Фіксація керамічної брекет-системи (1 щелепа)",
        price: { from: 15000 },
      },
      {
        title: "Фіксація металевої самолігуючої брекет-системи (1 щелепа)",
        price: { from: 14500 },
      },
      {
        title: "Фіксація керамічної самолігуючої брекет-системи (1 щелепа)",
        price: { from: 18000 },
      },
      { title: "Встановлення мікроімплантів", price: { from: 5000 } },
      {
        title: "Зняття брекет-системи + професійна гігієна, полірування зубів",
        price: { from: 1800 },
      },
      { title: "Ретенційна капа", price: { from: 2500 } },
      { title: "Фіксація ретейнера (1 щелепа)", price: { from: 1800 } },
      { title: "Виготовлення утримувача місця", price: { from: 2500 } },
    ],
  },
  // hygiene_bleaching
  {
    id: EnumSeviceID.hygiene_bleaching,
    title: "Гігієна та відбілювання",
    description:
      "Професійна гігієна порожнини рота, комплексна (скейлінг, Air- flow), пародонтологічна чистка зубів, фото відбілювання зубів та ін.",
    iconURL: icon4,
    imageURL: img4,
    cost: 1200,
    children: <Hygiene />,
    bigImageURL: imgBig4,
    costs: [
      {
        title: "Консультація лікаря-стоматолога",
        price: { from: 200 },
      },
      {
        title:
          "Професійна гігієна порожнини рота комплексна (скейлінг, Air- flow, полірування)",
        price: { from: 1200, to: 1500 },
      },
      {
        title:
          "Пародонтологічна чистка зубів з використанням ручного скейлінгу, одна щелепа",
        price: { from: 1500 },
      },
      {
        title: "Плазмотерапія, одна щелепа",
        price: { from: 1500 },
      },
      {
        title: "Фото відбілювання зубів «Magic Smile», 2 щелепи",
        price: { from: 2500 },
      },
    ],
  },
  // prevention
  {
    id: EnumSeviceID.prevention,
    title: "Профілактика",
    description:
      "Герметизація фісур, ремінералізуюча терапія, фторування зубів, контроль гігієни порожнини рота та ін.",
    iconURL: icon5,
    imageURL: img5,
    cost: 450,
    bigImageURL: imgBig5,
    children: <Prevention />,
  },
  // pediatric_dentistry
  {
    id: EnumSeviceID.pediatric_dentistry,
    title: "Дитяча стоматологія",
    description:
      "Лікування карієсу молочних і постійних зубів, лікування кореневих каналів, дитяча реставрація зубів, виправлення прикусу та ін.",
    iconURL: icon6,
    imageURL: img6,
    cost: 450,
    bigImageURL: imgBig6,
    children: <Pediatric />,
    costs: [
      {
        title: "Консультація лікаря-стоматолога дитячого",
        price: { from: 200 },
      },
      { title: "Анестезія ін’єкційна", price: { from: 200 } },
      {
        title: "Професійна чистка молочних зубів (щітка+паста)",
        price: { from: 450 },
      },
      {
        title: "Професійна чистка зубів комплексна, тимчасовий прикус",
        price: { from: 600 },
      },
      {
        title: "Професійна чистка зубів комплексна, змінний прикус",
        price: { from: 800 },
      },
      { title: "Герметизація фісур (один зуб)", price: { from: 450 } },
      {
        title: "Лікування карієсу молочного зуба",
        price: { from: 600, to: 700 },
      },
      {
        title:
          "Лікування пульпіту (пломбування кореневих каналів)  *без врахування постійної пломби",
        price: { from: 800, to: 1000 },
      },
      {
        title: "Фіксація дитячої стандартної металевої коронки",
        price: { from: 1200 },
      },
      { title: "Видалення молочного зуба", price: { from: 300, to: 400 } },
    ],
  },
  // laser_dentistry
  {
    id: EnumSeviceID.laser_dentistry,
    title: "Лазерна стоматологія",
    description:
      "Висічення капюшона при прорізуванні зубів мудрості, лікування хвороб пародонта, корекція вуздечок губ та язика та ін.",
    iconURL: icon7,
    imageURL: img7,
    cost: 1000,
    bigImageURL: imgBig7,
    children: <Laser />,
    costs: [
      { title: "Консультація лікаря-стоматолога", price: { from: 200 } },
      { title: "Анестезія ін’єкційна", price: { from: 200 } },
      { title: "Пластика вуздечки губ", price: { from: 1300 } },
      { title: "Пластика вуздечки язика", price: { from: 1300 } },
      {
        title:
          "Розкриття ретинованого зуба (для подальшого ортодонтичного лікування)",
        price: { from: 1300 },
      },
      { title: "Коагуляція ясен", price: { from: 500 } },
      {
        title: "Висічення «капюшона» над зубом мудрості",
        price: { from: 1000 },
      },
    ],
  },
  // surgery
  {
    id: EnumSeviceID.surgery,
    title: "Хірургія",
    description:
      "Анестезія ін’єкційна, видалення зубів мудрості, розкриття періостального абсцесу та постановка дренажу, кюретаж лунки та ін.",
    iconURL: icon8,
    imageURL: img8,
    cost: 800,
    bigImageURL: imgBig8,
    children: <Surgery />,
    costs: [
      {
        title: "Консультація лікаря-хірурга-стоматолога",
        price: { from: 200 },
      },
      { title: "Анестезія ін’єкційна", price: { from: 200 } },
      { title: "Видалення  зуба", price: { from: 800, to: 1200 } },
      { title: "Видалення зуба мудрості І рівень", price: { from: 1400 } },
      { title: "Видалення зуба мудрості ІI рівень", price: { from: 1600 } },
      {
        title: "Атипове видалення зуба мудрості",
        price: { from: 2200, to: 2500 },
      },
      {
        title: "Розкриття періостального абсцесу та постановка дренажу",
        price: { from: 400 },
      },
      { title: "Кюретаж лунки, медикаментозна обробка", price: { from: 300 } },
      { title: "Накладання швів", price: { from: 200 } },
    ],
  },
  // aesthetic_dentistry
  {
    id: EnumSeviceID.aesthetic_dentistry,
    title: "Естетична стоматологія",
    description:
      "Художня реставрація зубів фотополімером, керамічними вінірами та вкладками, естетична реставрація фронтальних зубів.",
    iconURL: icon9,
    imageURL: img9,
    cost: 1500,
    bigImageURL: imgBig9,
    children: <Aesthetic />,
    costs: [
      {
        title: "Консультація лікаря-ортопеда-стоматолога",
        price: { from: 200 },
      },

      {
        title: "Естетична реставрація фронтальних зубів",
        price: { from: 200 },
      },
      { title: "Вінір керамічний", price: { from: 800, to: 1200 } },
    ],
  },
  // treatment_under_microscope
  {
    id: EnumSeviceID.treatment_under_microscope,
    title: "Лікування під мікроскопом",
    description:
      "Точне лікування кореневих каналів, ретельна герметизація каналу, видалення уламків стоматологічних інструментів та ін.",
    iconURL: icon10,
    imageURL: img10,
    cost: 3000,
    bigImageURL: imgBig10,
    children: <Microscope />,
  },
  // plasma_therapy_periodontology
  {
    id: EnumSeviceID.plasma_therapy_periodontology,
    title: "Плазмотерапія та пародонтологія ",
    description:
      "Метод локальної стимуляції регенеративних процесів в тканинах пародонта шляхом ін’єкції збагаченої тромбоцитами плазми.",
    iconURL: icon11,
    imageURL: img11,
    cost: 1500,
    bigImageURL: imgBig11,
    children: <Plasma />,
    costs: [
      {
        title: "Консультація лікаря-пародонтолога",
        price: { from: 200 },
      },

      {
        title: "Анестезія ін’єкційна",
        price: { from: 200 },
      },
      {
        title:
          "Професійна гігієна порожнини рота комплексна (скейлінг, Air-flow, полірування)",
        price: { from: 1200, to: 1500 },
      },
      {
        title:
          "Пародонтологічна чистка зубів з використанням ручного скейлінгу, одна щелепа",
        price: { from: 1500 },
      },
      { title: "Плазмотерапія, одна щелепа", price: { from: 1500 } },
    ],
  },
];
