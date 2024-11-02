/* app imports */
import getGraphDataOne from "@common/data/get-graph-data-one";
import GridLinesHorizontal from "./grid-lines-horizontal";
import VerticalBars from "./vertical-bars";

/* component */
function BarChartVertical(): JSX.Element {
  /* data */
  const graphDataOne = getGraphDataOne();

  return (
    <>
      <div className="container chartParent vertical positionRelative">
        <GridLinesHorizontal />
        {
          graphDataOne.map((data, index) => {
            return (
              <VerticalBars key={index} data={data} index={index} />
            );
          })
        }
      </div>
    </>
  );
}

/* exports */
export default BarChartVertical;
