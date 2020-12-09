import { FormBagType } from '../global/ObjectForm/ObjectFormContext';

export const isRequired = ({ values }: FormBagType, name: string) => !values[name] && 'This field is required';

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidEmail = ({ values }: FormBagType, name: string) =>
  !validateEmail(values[name]) && 'Email format is invalid';
