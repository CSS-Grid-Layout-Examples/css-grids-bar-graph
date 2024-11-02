/* app imports */
import "./css/style.scss";
import getGraphDataOne from "@common/data/get-graph-data-one";
import getGraphDataTwo from "@common/data/get-graph-data-two";

/* component */
function AppOutlet(): JSX.Element {
  const graphDataOne = getGraphDataOne();
  const graphDataTwo = getGraphDataTwo();

  return (
    <>
      <div className="container chartParent vertical positionRelative">
        <div className="gridLineParent horizontal">
          {
            Array.from({length: 10}, (_, index) => {
              return (
                <div className="cell" key={index}></div>
              );
            })
          }
        </div>
        {
          graphDataOne.map((data, index) => {
            const classString = index % 2 == 0 ? "bar even" : "bar odd";
            const valueStyle = {
              "--row_start": (10 * index) + 1,
            } as React.CSSProperties;
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
          })
        }
      </div>

      <div className="container chartParent horizontal positionRelative">
        <div className="gridLineParent vertical">
          {
            Array.from({length: 10}, (_, index) => {
              return (
                <div className="cell" key={index}></div>
              );
            })
          }
        </div>
        {
          graphDataTwo.map((data, index) => {
            const classString = (index % 2 === 0) ? "bar even" : "bar odd";
            const yearStyle = {
              "--row_start": (index + 1),
              "--row_end": (index + 2)
            } as React.CSSProperties;
            const barStyle = {
              "--col_end": data.colEnd,
              "--row_start": data.rowStart,
              "--row_end": data.rowEnd
            } as React.CSSProperties;

            return (
              <>
                <div style={yearStyle} className="year" key={index}>{data.year}</div>
                <div style={barStyle} className={classString} key={index}></div>
              </>
            );
          })
        }
        {
          Array.from({length: 11}, (_, index) => {
            const valueStyle = {
              "--col_pos": (10 * index) + 1,
            } as React.CSSProperties;

            return (
              <div className="value" style={valueStyle} key={index}>{(index * 10)}%</div>
            );
          })
        }
      </div>
    </>
  );
}

/* exports */
export default AppOutlet;
