import { combineReducers } from 'redux';

const selectCategory = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return action.category;
    default:
      return state;
  }
};

const filter = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER': {
      const filterIndex = state.indexOf(action.filter);
      if (filterIndex > -1) {
        return [
          ...state.slice(0, filterIndex),
          ...state.slice(filterIndex + 1),
        ];
      }
      return [...state, action.filter];
    }
    case 'RESET_FILTER':
      return [];
    default:
      return state;
  }
};

const products = (
  state = {
    isFetching: false,
    products: [],
    sizes: [],
    filter: [],
  },
  action,
) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        isFetching: false,
        products: action.products,
        sizes: action.sizes,
      };
    case 'TOGGLE_FILTER':
    case 'RESET_FILTER':
      return { ...state, filter: filter(state.filter, action) };
    default:
      return state;
  }
};

const productsByCategory = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
    case 'RECEIVE_PRODUCTS':
    case 'TOGGLE_FILTER':
    case 'RESET_FILTER':
      return {
        ...state,
        [action.category]: products(state[action.category], action),
      };
    default:
      return state;
  }
};

const visibleItem = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return { ...state, path: action.path };
    case 'REQUEST_ITEM':
      return { ...state };
    case 'RECEIVE_ITEM':
      return {
        ...state,
        item: {
          title: action.item.title,
          currency: action.item.currency,
          price: action.item.price,
          images: action.item.images,
          description: action.item.description },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productsByCategory,
  selectCategory,
  visibleItem,
});

export default rootReducer;
