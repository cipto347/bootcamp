import moment from "moment";

export default function CapitalFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function partialEmail(email) {
  return email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
}

export function moneyFormatter(money) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formatter.format(money);
}

export function dateFormat(date) {
  return moment(date).format("YYYY-MM-DD");
}
