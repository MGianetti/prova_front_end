import React, { useRef, useState } from "react";

//Utils
import {
  userFormValidation,
  displayValidationMessage,
} from "../utils/formValidation";

//Styled Components
import {
  FormInput,
  FormWrapper,
  FormButton,
  FormLabel,
  ErrorLabel,
} from "../App.styles";

//Interfaces
import { UserData } from "../API/API";

//Consts
export const INPUT_TEXT = {
  name: "Nome Completo (sem abreviações)",
  email: "Email",
  cpf: "CPF",
  phone: "Telefone",
};

//Types
type NewUserProps = {
  onAddUser: (newUser: UserData) => void;
};

const UserForm: React.FC<NewUserProps> = ({ onAddUser }) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const cpfInputRef = useRef<HTMLInputElement>(null);
  const telInputRef = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [cpfError, setCpfError] = useState(true);
  const [telError, setTelError] = useState(true);

  const userSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameInputRef.current!.value;
    const email = emailInputRef.current!.value;
    const cpf = cpfInputRef.current!.value;
    const phone = telInputRef.current!.value;

    const validation = userFormValidation({ name, email, cpf, phone });

    if (
      validation.cpfValidation &&
      validation.emailValidation &&
      validation.nameValidation &&
      validation.phoneValidation
    ) {
      displayValidationMessage(validation, {
        setNameError,
        setEmailError,
        setCpfError,
        setTelError,
      });
      nameInputRef.current!.value = "";
      emailInputRef.current!.value = "";
      cpfInputRef.current!.value = "";
      telInputRef.current!.value = "";

      onAddUser({ name, email, cpf, phone });
    } else {
      displayValidationMessage(validation, {
        setNameError,
        setEmailError,
        setCpfError,
        setTelError,
      });
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={userSubmitHandler}>
        <FormLabel className="control-label" htmlFor={INPUT_TEXT.name}>
          {INPUT_TEXT.name}
        </FormLabel>
        <FormInput
          errorColor={!nameError}
          id={INPUT_TEXT.name}
          ref={nameInputRef}
        ></FormInput>
        {!nameError && (
          <ErrorLabel>Campo deve conter 3 caracteres ou mais</ErrorLabel>
        )}
        <FormLabel className="control-label" htmlFor={INPUT_TEXT.email}>
          {INPUT_TEXT.email}
        </FormLabel>
        <FormInput
          errorColor={!nameError}
          id={INPUT_TEXT.email}
          ref={emailInputRef}
        ></FormInput>
        {!emailError && (
          <ErrorLabel>Campo deve conter 3 caracteres ou mais</ErrorLabel>
        )}
        <FormLabel className="control-label" htmlFor={INPUT_TEXT.cpf}>
          {INPUT_TEXT.cpf}
        </FormLabel>
        <FormInput
          errorColor={!nameError}
          id={INPUT_TEXT.cpf}
          ref={cpfInputRef}
        ></FormInput>
        {!cpfError && (
          <ErrorLabel>Campo deve conter 3 caracteres ou mais</ErrorLabel>
        )}
        <FormLabel className="control-label" htmlFor={INPUT_TEXT.phone}>
          {INPUT_TEXT.phone}
        </FormLabel>
        <FormInput
          errorColor={!nameError}
          id={INPUT_TEXT.phone}
          ref={telInputRef}
        ></FormInput>
        {!telError && (
          <ErrorLabel>Campo deve conter 3 caracteres ou mais</ErrorLabel>
        )}

        <FormButton type="submit">Cadastrar</FormButton>
      </form>
    </FormWrapper>
  );
};

export default UserForm;
