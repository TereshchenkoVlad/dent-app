import React from "react";

import CallBack from "components/CallBack";

import Input from "components/Input";
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
  return (
    <Form>
      <FormTitle>Залишіть свої контакти</FormTitle>
      <div style={styles.callBack}>
        <CallBack type="dark" />
      </div>

      <Input label="Ім’я" />
      <Input label="Телефон" />
      <div style={styles.buttonContainer}>
        <ButtonComponent />
      </div>
    </Form>
  );
};

export default ContactForm;
