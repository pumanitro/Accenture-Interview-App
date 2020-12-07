import { useObjectForm, ObjectFormContextType, SetValueType } from './ObjectFormContext';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// for being reactive when they are more than one field listening for a given key
const register = (key: string, id: string, formBag: ObjectFormContextType, setValue: SetValueType) => {
  if (!formBag.registeredFields[key]) {
    formBag.registeredFields[key] = [];
  }

  formBag.registeredFields[key].push({
    id,
    setValue,
  });
};

// to EXPLICITLY mutate core object and be reactive for hooks update
const reactivelySetValue = (formBag: ObjectFormContextType, key: string) => {
  return (newValue: any) => {
    formBag.registeredFields[key].forEach(registeredField => {
      registeredField.setValue(newValue);
    });
  };
};

// to clean up registered field when component unmounts and do not update it any more.
const unregister = (key: string, id: string, formBag: ObjectFormContextType) => {
  formBag.registeredFields[key] = formBag.registeredFields[key].filter(registeredField => registeredField.id !== id);
};

export const useObjectField = (key: string) => {
  const formBag = useObjectForm();
  const [value, setValue] = useState(formBag.values[key]);
  const id = uuidv4();

  useEffect(() => {
    return () => unregister(key, id, formBag);
  });

  register(key, id, formBag, setValue);

  return { value, setValue: reactivelySetValue(formBag, key) };
};
