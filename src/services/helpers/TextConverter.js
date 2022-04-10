export default function CapitalFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function partialEmail(email) {
  return email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
}
