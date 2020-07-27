import { UserData } from "../API/API";

export const userFormValidation = (userForm: UserData) => {
  return {
    nameValidation: userForm.name.length >= 3 ? true : false,
    emailValidation: userForm.email.length >= 3 ? true : false,
    cpfValidation: userForm.cpf.length >= 3 ? true : false,
    phoneValidation: userForm.phone.length >= 3 ? true : false,
  };
};

export const displayValidationMessage = (
  validation: {
    nameValidation: boolean;
    emailValidation: boolean;
    cpfValidation: boolean;
    phoneValidation: boolean;
  },
  errorMessages: {
    setNameError: React.Dispatch<React.SetStateAction<boolean>>;
    setEmailError: React.Dispatch<React.SetStateAction<boolean>>;
    setCpfError: React.Dispatch<React.SetStateAction<boolean>>;
    setTelError: React.Dispatch<React.SetStateAction<boolean>>;
  }
) => {
  !validation.nameValidation
    ? errorMessages.setNameError(false)
    : errorMessages.setNameError(true);
  !validation.emailValidation
    ? errorMessages.setEmailError(false)
    : errorMessages.setEmailError(true);
  !validation.cpfValidation
    ? errorMessages.setCpfError(false)
    : errorMessages.setCpfError(true);
  !validation.phoneValidation
    ? errorMessages.setTelError(false)
    : errorMessages.setTelError(true);
};
