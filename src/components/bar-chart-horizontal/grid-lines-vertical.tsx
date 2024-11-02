/* component */
function GridLinesVertical(): JSX.Element {
  return (
    <div className="gridLineParent vertical">
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
export default GridLinesVertical;
