/* component */
function YAxis(): JSX.Element {
  return (
    <>
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
    </>
  );
}

/* exports */
export default YAxis;
