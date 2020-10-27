export  const columns = [
  {
    Header:"Country",
    accessor: function(row) {
      return {
        name:row.country,
        flag:row.countryInfo.flag
      }

    },
    id:"country"
  }

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