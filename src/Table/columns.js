export  const columns = [
  {
    Header:"Country",
    accessor: function(row) {
      return JSON.stringify({
        name:row.country,
        flag:row.countryInfo.flag
      })

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