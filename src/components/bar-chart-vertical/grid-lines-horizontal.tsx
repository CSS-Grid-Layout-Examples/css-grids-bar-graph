/* component */
function GridLinesHorizontal(): JSX.Element {
  return (
    <div className="gridLineParent horizontal">
      {
        Array.from({length: 10}, (_, index) => {
          return (
            <div className="cell" key={index}></div>
          );
        })
      }
    </div>
  );
}

/* exports */
export default GridLinesHorizontal;
