import React, { useState } from "react";
import { useFormik } from "formik";
import * as emailjs from "emailjs-com";

import { FormSchema } from "helpers/validations";
import { usePopUpContext } from "context/popupContext";

import Input from "components/Input";
import Loader from "components/Loader";
import CallBack from "components/CallBack";
import ButtonComponent from "components/Button";

import { Form, FormTitle, CloseWrapper, CloseIcon } from "./styles";
import { AppConfig } from "config/applicationConfig";

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
  const { onClose } = usePopUpContext();

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      name: "",
      phone: "",
    },
    onSubmit: ({ name, phone }) => {
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
          console.log("emailjs: Success ", res.status, res.text);
          onClose();
        })
        .catch((e) => {
          console.log("emailjs: Error ", e);
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
      <CloseWrapper onClick={onClose}>
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
      <div style={styles.buttonContainer} onClick={() => handleSubmit()}>
        {loading ? <Loader /> : <ButtonComponent />}
      </div>
    </Form>
  );
};

export default ContactForm;
