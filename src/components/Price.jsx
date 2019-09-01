import React from 'react';

export default ({ children, currency }) => {
  const price = children / 100;
  const currencies = {
    RUB: `${price}₽`,
    USD: `$${price}`,
    EUR: `€${price}`,
  };
  return (<span>{currencies[currency]}</span>);
};
