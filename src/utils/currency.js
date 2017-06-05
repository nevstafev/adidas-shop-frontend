const currencies = {
  USD: '$',
  EUR: '€',
};

export default function toSymbol(code) {
  return currencies[code];
}
