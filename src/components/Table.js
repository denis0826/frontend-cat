import React from 'react';

export default ({ dataTable }) => {
  const dataColumns= ['name', 'donated'];
  const [ user ] = dataTable;
  const tableHeaders = <tr>
      { dataColumns.map((column, i) => <th key={i}>{column}</th> ) }
    </tr>

  const tableBody = user.donations.map((row, i) => (
    <tr key={`tr-${i}`}>
      {dataColumns.map((column, c) => <td key={`td-${c}`}>{row[column]}</td>)}
    </tr>
  ));

  return(
    <table className='table'>
      <thead>
        {tableHeaders}
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  )
};