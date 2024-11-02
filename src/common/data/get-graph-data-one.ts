/* interface */
export interface IGraphDataOne {
  rowStart: number;
  colStart: number;
  colEnd: number;
  year: number;
}

/* module */
function getGraphDataOne(): IGraphDataOne[] {
  return [
    {rowStart: 10, colStart: 1, colEnd: 2, year: 2001},
    {rowStart: 23, colStart: 2, colEnd: 3, year: 2002},
    {rowStart: 34, colStart: 3, colEnd: 4, year: 2003},
    {rowStart: 15, colStart: 4, colEnd: 5, year: 2004},
    {rowStart: 78, colStart: 5, colEnd: 6, year: 2005},
    {rowStart: 56, colStart: 6, colEnd: 7, year: 2006},
    {rowStart: 63, colStart: 7, colEnd: 8, year: 2007},
    {rowStart: 89, colStart: 8, colEnd: 9, year: 2008},
    {rowStart: 29, colStart: 9, colEnd: 10, year: 2009},
    {rowStart: 66, colStart: 10, colEnd: 11, year: 2010},
  ];
}

/* exports */
export default getGraphDataOne;
