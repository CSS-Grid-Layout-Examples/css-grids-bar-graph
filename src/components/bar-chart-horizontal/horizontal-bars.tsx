/* app imports */
import { IGraphDataTwo } from "@common/data/get-graph-data-two.tsx";

/* interface */
interface FCProps {
  data: IGraphDataTwo,
  index: number;
}

/* component */
function HorizontalBar(props: FCProps): JSX.Element {
  /* props de-struct */
  const { data, index } = props;

  /* each bar will have an 'even' or 'odd' type */
  const classString = (index % 2 === 0) ? "bar even" : "bar odd";

  /* x-axis */
  const yearStyle = {
    "--row_start": (index + 1),
    "--row_end": (index + 2)
  } as React.CSSProperties;

  /* each bar */
  const barStyle = {
    "--col_end": data.colEnd,
    "--row_start": data.rowStart,
    "--row_end": data.rowEnd
  } as React.CSSProperties;

  /* render */
  return (
    <>
      <div style={yearStyle} className="year" key={index}>{data.year}</div>
      <div style={barStyle} className={classString} key={index}></div>
    </>
  );
}

/* exports */
export default HorizontalBar;
