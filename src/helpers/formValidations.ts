import { FormBagType } from '../global/ObjectForm/ObjectFormContext';

export const isRequired = ({ values }: FormBagType) => !values.title && 'This field is required';
