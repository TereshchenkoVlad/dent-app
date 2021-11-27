// 1. Dentistry
import icon1 from "assets/images/icons/services/tooth.svg";
import img1 from "assets/images/icons/services/kindsDent.svg";
// 2. Prosthesis
import icon2 from "assets/images/icons/services/prosthesis.svg";
import img2 from "assets/images/icons/services/kindsDent.svg";
// 3. Orthodontics
import icon3 from "assets/images/icons/services/braces.svg";
import img3 from "assets/images/icons/services/kindsDent.svg";
// 4. Tooth cleaning
import icon4 from "assets/images/icons/services/tooth-cleaning.svg";
import img4 from "assets/images/icons/services/kindsDent.svg";
// 5. Prevention
import icon5 from "assets/images/icons/services/prevention.svg";
import img5 from "assets/images/icons/services/kindsDent.svg";
// 6. Pediatric dentistry
import icon6 from "assets/images/icons/services/baby-teeth.svg";
import img6 from "assets/images/icons/services/kindsDent.svg";
// 7. Laser dentistry
import icon7 from "assets/images/icons/services/laser_dentistry.svg";
import img7 from "assets/images/icons/services/kindsDent.svg";
// 8. Surgery
import icon8 from "assets/images/icons/services/doctor.svg";
import img8 from "assets/images/icons/services/kindsDent.svg";
// 9. Aesthetic dentistry
import icon9 from "assets/images/icons/services/smile.svg";
import img9 from "assets/images/icons/services/kindsDent.svg";
// 10. Treatment under a microscope
import icon10 from "assets/images/icons/services/treatment_microscope.svg";
import img10 from "assets/images/icons/services/kindsDent.svg";
// 11. Plasma therapy and periodontology
import icon11 from "assets/images/icons/services/plasma_therapy.svg";
import img11 from "assets/images/icons/services/kindsDent.svg";

interface SeviceType {
  title: string;
  description: string;
  iconURL: string;
  imageURL: string;
}

export const SERVICES: SeviceType[] = [
  {
    title: "Лікування зубів",
    description:
      "В «Стоматології лікаря Ляшука» успішно лікують карієс та його ускладнення за допомогою сучасного обладнання.",
    iconURL: icon1,
    imageURL: img1,
  },
  {
    title: "Протезування",
    description:
      "Виготовлення металокерамічних коронок, безметалевих коронок, керамічних вінірів, коронок на імплантаті, виготовлення протезів.",
    iconURL: icon2,
    imageURL: img2,
  },
  {
    title: "Ортодонтія",
    description:
      "Зняття відбитків, виготовлення діагностичних гіпсових моделей, пластинковий апарат з гвинтом, фіксація металевої брекет-системи.",
    iconURL: icon3,
    imageURL: img3,
  },
  {
    title: "Гігієна та відбілювання",
    description:
      "Професійна гігієна порожнини рота, комплексна (скейлінг, Air- flow), пародонтологічна чистка зубів, фото відбілювання зубів та ін.",
    iconURL: icon4,
    imageURL: img4,
  },
  {
    title: "Профілактика",
    description:
      "Вживання препаратів фтору, ремінералізуюча терапія, фторування зубів, дотримання гігієни порожнини рота та ін.",
    iconURL: icon5,
    imageURL: img5,
  },
  {
    title: "Дитяча стоматологія",
    description:
      "Лікування карієсу молочних і постійних зубів, лікування кореневих каналів, дитяча реставрація зубів, виправлення прикусу та ін.",
    iconURL: icon6,
    imageURL: img6,
  },
  {
    title: "Лазерна стоматологія",
    description:
      "Висічення капюшона при прорізуванні зубів мудрості, лікування хвороб пародонта, корекція вуздечок губ та язика та ін.",
    iconURL: icon7,
    imageURL: img7,
  },
  {
    title: "Хірургія",
    description:
      "Анестезія ін’єкційна, видалення зубів мудрості, розкриття періостального абсцесу та постановка дренажу, кюретаж лунки та ін.",
    iconURL: icon8,
    imageURL: img8,
  },
  {
    title: "Естетична стоматологія",
    description:
      "Художня реставрація зубів фотополімером, керамічними вінірами та вкладками, естетична реставрація фронтальних зубів.",
    iconURL: icon9,
    imageURL: img9,
  },
  {
    title: "Лікування під мікроскопом",
    description:
      "Точне лікування кореневих каналів, ретельна герметизація каналу, видалення уламків стоматологічних інструментів та ін.",
    iconURL: icon10,
    imageURL: img10,
  },
  {
    title: "Плазмотерапія та парадонтологія",
    description:
      "Метод локальної стимуляції регенеративних процесів в тканинах пародонта шляхом ін’єкції збагаченої тромбоцитами плазми.",
    iconURL: icon11,
    imageURL: img11,
  },
];
