import { get } from './api';

export const selectCategory = category => ({ type: 'SELECT_CATEGORY', category });

const requestProducts = category => ({ type: 'REQUEST_PRODUCTS', category });

export const toggleFilter = (filter, category) => ({ type: 'TOGGLE_FILTER', filter, category });

export const resetFilter = category => ({ type: 'RESET_FILTER', category });

const receiveProducts = (category, json) => ({
  type: 'RECEIVE_PRODUCTS',
  category,
  products: json.items,
  sizes: [...json.items.reduce((acc, item) => {
    item.sizes.forEach(size => acc.add(size));
    return acc;
  }, new Set())],
});

export const fetchProducts = category => (dispatch) => {
  dispatch(selectCategory(category));
  dispatch(requestProducts(category));
  return get(`/v1/${category}`)
      .then(json => dispatch(receiveProducts(category, json)));
};

