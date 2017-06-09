import React from 'react';

export default (props) => {
  const price = props.children / 100;
  const currencies = {
    RUB: `${price}₽`,
    USD: `$${price}`,
    EUR: `€${price}`,
  };
  return (<span>{currencies[props.currency]}</span>);
};
