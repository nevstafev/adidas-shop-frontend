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

const selectItem = path => ({
  type: 'SELECT_ITEM',
  path,
});

const requestItem = path => ({
  type: 'REQUEST_ITEM',
  path,
});

const receiveItem = ({ title, currency, price, images, description }) => ({
  type: 'RECEIVE_ITEM',
  item: {
    title,
    currency,
    price,
    images,
    description,
  },
});

export const fetchItem = path => (dispatch) => {
  dispatch(selectItem(path));
  dispatch(requestItem(path));
  return get(`/v1/${path}`)
    .then(json => dispatch(receiveItem(json)));
};
