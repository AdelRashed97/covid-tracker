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
        <span className="country">
          <img src={country.flag} alt="flag"/>
            {country.name}
        </span>
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
          <span className="stats">
          <strong>N/A</strong>
          
        </span>
        )
      } else {
        
        return (
          <span >
            <strong>{numeral(value).format('0.00a')}</strong>
            
          </span>
        )
      }
    },

  },

  {
    Header:"Recovered",
    accessor:"recovered",
    Cell: function ({value}) {
      if (value === null) {
        return (
          <span >
          <strong>N/A</strong>
          
        </span>
        )
      } else {
        
        return (
          <span >
            <strong>{numeral(value).format('0.00a')}</strong>
            
          </span>
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
          <span className="stats">
          <strong>N/A</strong>
          
        </span>
        )
      } else {
        
        return (
          <span className="stats">
            <strong>{numeral(value).format('0.00a')}</strong>
            
          </span>
        )
      }
    },
  }

]