import React from 'react';
import axios from 'axios';
import {useEffect,useState,useMemo} from 'react';
import {useTable} from 'react-table'
import { Box, Typography } from '@material-ui/core'
import {columns as Columns} from "./columns";
import './Table.css'

export default function Table({changeCountry}) {
  const updateTime = 30 *60*1000;
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=true')
    .then (res => setData(res.data))

    setInterval(()=>{
      axios.get('https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=true')
    .then (res => setData(res.data))

    },updateTime)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const tableData = useMemo(()=>data,[data])
  const columns =useMemo(()=>Columns,[])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data:tableData,
  })

const onClick = (event)=> {
  const country = event.currentTarget.getElementsByClassName('country__name')[0].innerHTML.trim();
  changeCountry(country)

}
  return (
    <div>
    <h3>Current Country Stats</h3>
    <div className="app__table">

    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} onClick={onClick} >
              {row.cells.map(cell => {
                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    <Box fontStyle="italic" >
        <Typography variant="caption" >
          Note: N/A indicates unavailable data.
        </Typography>
        </Box>
    </div>
  )
}
