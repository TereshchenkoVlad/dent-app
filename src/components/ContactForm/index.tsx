import React, { useState } from "react";
import { useFormik } from "formik";
import * as emailjs from "emailjs-com";

import { FormSchema } from "helpers/validations";
import { AppConfig } from "config/applicationConfig";
import { usePopUpContext } from "context/popupContext";
import { useCounterContext } from "context/counterContext";

import Input from "components/Input";
import Loader from "components/Loader";
import CallBack from "components/CallBack";
import ButtonComponent from "components/Button";

import { Form, FormTitle, CloseWrapper, CloseIcon } from "./styles";

import closeIcon from "assets/images/icons/close.png";

const styles = {
  callBack: {
    marginBottom: 30,
  },
  buttonContainer: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 50,
  },
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { onCloseForm, onOpenPopup } = usePopUpContext();
  const { counter, addCount } = useCounterContext();

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      name: "",
      phone: "",
    },
    onSubmit: ({ name, phone }) => {
      // Local cheker
      if (counter >= 2) {
        formik.setErrors({
          name: "Доступно лише 2 запита на день",
          phone: "Доступно лише 2 запита на день",
        });
        return;
      }

      setLoading(true);
      const templateParams = {
        name,
        phone,
      };
      emailjs
        .send(
          AppConfig.emailjs.serviceID,
          AppConfig.emailjs.templateID,
          templateParams,
          AppConfig.emailjs.userID
        )
        .then((res) => {
          addCount();
          onOpenPopup();
          onCloseForm();
        })
        .catch((e) => {
          const error = e.text ? e.text.slice(0, 50) : "Something went wrong";
          formik.setErrors({ name: error, phone: error });
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  const { values, errors, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <CloseWrapper onClick={onCloseForm}>
        <CloseIcon src={closeIcon} alt="close" />
      </CloseWrapper>
      <FormTitle>Залишіть свої контакти</FormTitle>
      <div style={styles.callBack}>
        <CallBack type="dark" />
      </div>

      <Input
        id="name"
        name="name"
        type="text"
        label="Ім’я"
        error={errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        id="phone"
        name="phone"
        type="text"
        label="Телефон"
        error={errors.phone}
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div style={styles.buttonContainer}>
        {loading ? (
          <Loader />
        ) : (
          <ButtonComponent title="Відправити" onClick={handleSubmit} />
        )}
      </div>
    </Form>
  );
};

export default ContactForm;
