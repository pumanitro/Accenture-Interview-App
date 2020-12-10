import React from 'react';
import { AppWrapper } from 'components/AppWrapper/AppWrapper';
import { NewEventHeader } from 'components/NewEventHeader/NewEventHeader';
import { SuccessBox } from './Sucess.s';

export const Success = () => {
  return (
    <>
      <NewEventHeader />
      <AppWrapper>
        <SuccessBox>
          <h3>Success</h3>
          <p>Event has been created</p>
        </SuccessBox>
      </AppWrapper>
    </>
  );
};
