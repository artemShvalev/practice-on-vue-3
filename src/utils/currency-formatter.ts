const formater = new Intl.NumberFormat("ru-RU", {
  currency: "RUB",
  style: "currency",
});

export function currency(value): string {
  return formater.format(value);
}
