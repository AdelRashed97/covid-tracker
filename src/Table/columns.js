import React from 'react'
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
        <span>
          <img src={country.flag} alt="flag"/>
            {country.name}
        </span>
      )
    },
    // accessor:"country",
    id:"country"
  },

  {
    Header:"Active",
    accessor:"cases"
  },

  {
    Header:"Recovered",
    accessor:"recovered"
  },

  {
    Header:"Deaths",
    accessor:"deaths"
  }

]