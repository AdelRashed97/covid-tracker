import React from 'react'
import numeral from 'numeral'
export  const columns = [
  {
    Header:"Country",
    accessor: function(row) {
      return JSON.stringify({
        name:row.country,
        flag:row.countryInfo.flag
      })

    },
    Cell: function ({value}) {
      const country = JSON.parse(value)
      return (
        <div className="country">
          <img src={country.flag} alt="flag"/>
            <div> {country.name} </div>
        </div>
      )
    },

    id:"country"
  },

  {
    Header:"Active",
    accessor:"cases",
    Cell: function ({value}) {
      if (value === 'null') {
        return (
          <div className="stats">
          <strong>N/A</strong>
          
        </div>
        )
      } else {
        
        return (
          <div className="stats" >
            <strong>{numeral(value).format('0.00a')}</strong>
            
          </div>
        )
      }
    },

  },

  {
    Header:"Recovered",
    accessor:"recovered",
    Cell: function ({value}) {
      if (value === 'null') {
        return (
          <div className="stats">
          <strong>N/A</strong>
          
        </div>
        )
      } else {
        
        return (
          <div className="stats" >
            <strong>{numeral(value).format('0.00a')}</strong>
            
          </div>
        )
      }
    },
 
  },

  {
    Header:"Deaths",
    accessor:"deaths",
    Cell: function ({value}) {
      if (value === 'null') {
        return (
          <div className="stats">
          <strong>N/A</strong>
          
        </div>
        )
      } else {
        
        return (
          <div className="stats" >
            <strong>{numeral(value).format('0.00a')}</strong>
            
          </div>
        )
      }
    },
  }

]