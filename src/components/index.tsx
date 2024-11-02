/* app imports */
import "./css/style.scss";
import BarChartVertical from "./bar-chart-vertical";
import BarChartHorizontal from "./bar-chart-horizontal";

/* component */
function AppOutlet(): JSX.Element {
  return (
    <>
      <BarChartVertical />
      <BarChartHorizontal />
    </>
  );
}

/* exports */
export default AppOutlet;
