import { FormBagType } from '../global/ObjectForm/ObjectFormContext';

export const isRequired = ({ values }: FormBagType, name: string) => !values[name] && 'This field is required';
