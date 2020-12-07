import { useObjectForm, ObjectFormContextType, SetValueType } from './ObjectFormContext';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// for being reactive when they are more than one field listening for a given key
const register = (key: string, id: string, formValues: ObjectFormContextType, setValue: SetValueType) => {
  if (!formValues.registeredFields[key]) {
    formValues.registeredFields[key] = [];
  }

  formValues.registeredFields[key].push({
    id,
    setValue,
  });
};

// to EXPLICITLY mutate core object and be reactive for hooks update
const reactivelySetValue = (formValues: ObjectFormContextType, key: string) => {
  return (newValue: any) => {
    formValues.registeredFields[key].forEach(registeredField => {
      registeredField.setValue(newValue);
    });
  };
};

// to clean up registered field when component unmounts and do not update it any more.
const unregister = (key: string, id: string, formValues: ObjectFormContextType) => {
  formValues.registeredFields[key] = formValues.registeredFields[key].filter(
    registeredField => registeredField.id !== id
  );
};

const useObjectField = (key: string) => {
  const { values } = useObjectForm();
  const [value, setValue] = useState(values[key]);
  const id = uuidv4();

  useEffect(() => {
    return () => unregister(key, id, values);
  });

  register(key, id, values, setValue);

  return { value, setValue: reactivelySetValue(values, key) };
};
