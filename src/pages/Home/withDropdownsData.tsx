import React, { FC, useEffect } from 'react';
import { fetchCategories } from 'global/Redux/Slices/categorySlice';
import { RootState } from 'global/Redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner/Spinner';

export const withDropdownsData = (HomeComponent: FC<{}>) => () => {
  const { isLoading, error } = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (error) {
    return <div> Some error occurred when retrieved mocked data :( </div>;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return <HomeComponent />;
};
