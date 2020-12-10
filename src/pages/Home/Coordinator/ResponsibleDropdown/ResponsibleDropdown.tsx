import { FormDropdown } from 'components/FormDropdown/FormDropdown';
import { FormElement } from 'components/FormElement/FormElement';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'global/Redux/rootReducer';

export const ResponsibleDropdown = () => {
  const { entities } = useSelector((state: RootState) => state.coordinators);

  const others = entities.map(entity => ({
    value: JSON.stringify(entity),
    label: `${entity.name} ${entity.lastname}`,
  }));

  return (
    <FormElement title="responsible" isRequired>
      <FormDropdown
        name="responsible"
        options={{
          me: [
            {
              value: JSON.stringify({
                id: 777,
                name: 'Patryk',
                lastname: 'Janik',
                email: 'patrykjanik1710@gmail.com',
              }),
              label: 'Patryk Janik',
            },
          ],
          others,
        }}
        placeholder="Select coordinator"
      />
    </FormElement>
  );
};
