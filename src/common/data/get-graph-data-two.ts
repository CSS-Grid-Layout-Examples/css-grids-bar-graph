/* interface */
export interface IGraphDataTwo {
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  year: number;
}

/* module */
function getGraphDataTwo(): IGraphDataTwo[] {
  return [
    {colEnd: 66, rowStart: 1, rowEnd: 2, year: 2001},
    {colEnd: 20, rowStart: 2, rowEnd: 3, year: 2002},
    {colEnd: 16, rowStart: 3, rowEnd: 4, year: 2003},
    {colEnd: 83, rowStart: 4, rowEnd: 5, year: 2004},
    {colEnd: 75, rowStart: 5, rowEnd: 6, year: 2005},
    {colEnd: 39, rowStart: 6, rowEnd: 7, year: 2006},
    {colEnd: 51, rowStart: 7, rowEnd: 8, year: 2007},
    {colEnd: 54, rowStart: 8, rowEnd: 9, year: 2008},
    {colEnd: 18, rowStart: 9, rowEnd: 10, year: 2009},
    {colEnd: 90, rowStart: 10, rowEnd: 11, year: 2010},
  ];
}

/* exports */
export default getGraphDataTwo;
