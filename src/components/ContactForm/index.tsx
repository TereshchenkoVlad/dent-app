import React, { useState } from "react";
import { useFormik } from "formik";

import { FormSchema } from "helpers/validations";
import { usePopUpContext } from "context/popupContext";

import Input from "components/Input";
import Loader from "components/Loader";
import CallBack from "components/CallBack";
import ButtonComponent from "components/Button";

import { Form, FormTitle } from "./styles";

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
    onSubmit: (values) => {
      setLoading(true);
      console.log("values =>", values);
      setLoading(false);
    },
  });
  const { values, errors, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <Form onSubmit={handleSubmit}>
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
