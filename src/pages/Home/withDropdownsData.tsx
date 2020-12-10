import React, { FC, useEffect } from 'react';
import { fetchCategories } from 'global/Redux/Slices/categorySlice';
import { RootState } from 'global/Redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner/Spinner';
import { fetchCoordinators } from 'global/Redux/Slices/coordinatorsSlice';

export const withDropdownsData = (HomeComponent: FC<{}>) => () => {
  const { isLoading: areCategoriesLoading, error: hasCategoriesError } = useSelector(
    (state: RootState) => state.categories
  );
  const { isLoading: areCoordinatorsLoading, error: hasCoordinatorsError } = useSelector(
    (state: RootState) => state.coordinators
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // If there will be more requests OR performance issues then I would create single fetch for both requests with Promise.all
    dispatch(fetchCategories());
    dispatch(fetchCoordinators());
  }, [dispatch]);

  if (hasCategoriesError || hasCoordinatorsError) {
    return <div> Some error occurred when retrieved mocked data :( </div>;
  }
  if (areCategoriesLoading || areCoordinatorsLoading) {
    return <Spinner />;
  }

  return <HomeComponent />;
};
