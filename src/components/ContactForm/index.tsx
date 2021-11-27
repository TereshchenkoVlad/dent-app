import React from "react";

import CallBack from "components/CallBack";

import { Form } from "./styles";
import { Title } from "styles/text";
import Input from "components/Input";
import ButtonComponent from "components/Button";

const styles = {
  title: {
    marginBottom: 30,
    marginTop: 50,
  },
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
      <Title style={styles.title}>Залишіть свої контакти</Title>
      <div style={styles.callBack}>
        <CallBack />
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
