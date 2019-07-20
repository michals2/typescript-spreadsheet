import * as React from "react";
import { VariableSizeGrid as Grid } from "react-window";

const columnWidths = new Array(1000)
  .fill(undefined)
  .map(() => 75 + Math.round(Math.random() * 50));
const rowHeights = new Array(1000)
  .fill(undefined)
  .map(() => 25 + Math.round(Math.random() * 50));

const Cell = ({ columnIndex, rowIndex, style }) => (
  <div
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? "GridItemOdd"
          : "GridItemEven"
        : rowIndex % 2
        ? "GridItemOdd"
        : "GridItemEven"
    }
    style={style}
  >
    r{rowIndex}, c{columnIndex}
  </div>
);

const Table = () => (
  <Grid
    className="Grid"
    columnCount={1000}
    columnWidth={index => columnWidths[index]}
    height={150}
    rowCount={1000}
    rowHeight={index => rowHeights[index]}
    width={300}
  >
    {Cell}
  </Grid>
);

export default Table;
