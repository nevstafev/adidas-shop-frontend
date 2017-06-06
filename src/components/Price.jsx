import React from 'react';

const currencies = {
  USD: '$',
  EUR: '€',
};

export default props => <span>{currencies[props.currency]}{props.children / 100}</span>;
