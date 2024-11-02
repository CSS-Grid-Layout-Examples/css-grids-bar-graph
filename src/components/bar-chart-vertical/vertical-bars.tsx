/* app imports */
import { IGraphDataOne } from "@common/data/get-graph-data-one.ts";

/* interface */
interface FCProps {
  data: IGraphDataOne,
  index: number;
}

/* component */
function VerticalBars(props: FCProps): JSX.Element {
  /* props de-struct */
  const { data, index } = props;

  /* each bar will have an 'even' or 'odd' type */
  const classString = index % 2 == 0 ? "bar even" : "bar odd";

  /* helps determine the % legend placement */
  const valueStyle = {
    "--row_start": (10 * index) + 1,
  } as React.CSSProperties;

  /* helps determine the height and placement of bars */
  const graphStyle = {
    "--row_start": data.rowStart,
    "--col_start": data.colStart,
    "--col_end": data.colEnd
  } as React.CSSProperties;

  return (
    <>
      <div className="value" style={valueStyle}>{ 100 - (index * 10) }%</div>
      <div className="year text-center" style={graphStyle}>{data.year}</div>
      <div className={classString} style={graphStyle}></div>
    </>
  );
}

/* exports */
export default VerticalBars;
