/* app imports */
import getGraphDataTwo from "@common/data/get-graph-data-two";
import GridLinesVertical from "./grid-lines-vertical";
import HorizontalBar from "./horizontal-bars";
import YAxis from "./y-axis";

/* component */
function BarChartHorizontal(): JSX.Element {
  /* data */
  const graphDataTwo = getGraphDataTwo();

  return (
    <>
      <div className="container chartParent horizontal positionRelative">
        <GridLinesVertical />
        {
          graphDataTwo.map((data, index) => {
            return (
              <HorizontalBar key={index} data={data} index={index} />
            );
          })
        }
        <YAxis />
      </div>
    </>
  );
}

/* exports */
export default BarChartHorizontal;
