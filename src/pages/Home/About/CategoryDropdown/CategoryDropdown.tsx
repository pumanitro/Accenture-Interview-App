import { FormDropdown } from 'components/FormDropdown/FormDropdown';
import { FormElement } from 'components/FormElement/FormElement';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'global/Redux/rootReducer';

export const CategoryDropdown = () => {
  const { entities } = useSelector((state: RootState) => state.categories);

  return (
    <FormElement title="category">
      <FormDropdown
        name="category"
        options={entities.map(entity => ({
          value: entity.id,
          label: entity.name,
        }))}
        placeholder="Select category"
      />
    </FormElement>
  );
};
