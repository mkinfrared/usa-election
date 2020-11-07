/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";

import css from "./Table.module.scss";
import { TableProps } from "./Table.type";

const Table = <T,>({ data, headers, showOrder = true }: TableProps<T>) => {
  const headersArray = Object.entries(headers) as [
    keyof typeof headers,
    string
  ][];

  const tableHeaders = useMemo(() => {
    const array: JSX.Element[] = [];

    if (showOrder) {
      array.push(<th>#</th>);
    }

    headersArray.forEach((header, index) => {
      const [key, title] = header;

      const headerCell = (
        <th key={index} data-value={key}>
          {title}
        </th>
      );

      array.push(headerCell);
    });

    return array;
  }, [headersArray, showOrder]);

  const rows = useMemo(
    () =>
      data.map((row, index) => {
        const cells: JSX.Element[] = [];

        if (showOrder) {
          const elem = <td className={css.order}>{index + 1}</td>;

          cells.push(elem);
        }

        headersArray.forEach((header, idx) => {
          const [key] = header;
          const value = row[key];
          const elem = <td key={idx}>{value}</td>;

          cells.push(elem);
        });

        return <tr key={index}>{cells}</tr>;
      }),
    [data, headersArray, showOrder]
  );

  return (
    <table className={css.Table}>
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export { Table };

export default React.memo(Table) as typeof Table;
