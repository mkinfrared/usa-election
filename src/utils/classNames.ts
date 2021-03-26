type Value = string | number | undefined | null | boolean;

const classNames = (...values: Value[]) =>
  values.filter((value) => !!value).join(" ");

export default classNames;
