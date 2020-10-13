import FilterActionTypes from './filterProducts.types';

export const filterProducts = collections => ({
  type: FilterActionTypes.filterProducts,
  payload: collections
});