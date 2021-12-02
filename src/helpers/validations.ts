import * as yup from "yup";

const phoneRegex = /^\+?3?8?(0\d{9})$/;

export const FormSchema = yup.object().shape({
  name: yup.string().required("Введіть своє ім'я"),
  phone: yup
    .string()
    .required("Введіть номер телефону")
    .matches(phoneRegex, "Невірний формат"),
});
