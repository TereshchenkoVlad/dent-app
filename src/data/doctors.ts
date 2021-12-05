import doctor1 from "assets/images/doctor_1.png";
import doctor2 from "assets/images/doctor_2.png";
import doctor3 from "assets/images/doctor_3.png";
import doctor4 from "assets/images/doctor_4.png";
import doctor5 from "assets/images/doctor_5.png";

interface DoctorType {
  name: string;
  description: string;
  url: string;
}

export const DOCTORS: DoctorType[] = [
  {
    name: "Ляшук Артем Олександрович",
    description:
      "Головний лікар та керівник клініки Лікар - стоматолог - ортопед",
    url: doctor1,
  },
  {
    name: "Ляшук Роксолана Василівна",
    description: "Лікар - стоматолог - терапевт, дитячий стоматолог",
    url: doctor2,
  },

  {
    name: "Костюк Вікторія Леонідівна",
    description: "Лікар - стоматолог - терапевт",
    url: doctor3,
  },
  {
    name: "Ляшук Олександр Васильович",
    description: "Лікар - стоматолог - ортодонт",
    url: doctor4,
  },
  {
    name: "Ляшук Назарій Васильович",
    description: "Лікар - стоматолог - хірург",
    url: doctor5,
  },
];
