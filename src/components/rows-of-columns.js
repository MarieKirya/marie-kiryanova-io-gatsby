import React from "react"

const splitEvery = (array, length) =>
  array.reduce(
    (result, item, index) => {
      if ( index % length === 0 ) result.push([])
      result[Math.floor(index / length)].push(item)
      return result
    },
    []
  )

const classesForColumns = {
  2: "is-half",
  3: "is-one-third",
  4: "is-one-quarter",
  5: "is-one-fifth",
}

const RowsOfColumns = (props) => (
  <div>
    { splitEvery(props.data, props.columns).map(row => (
      <div className="columns">
        { row.map(col => (
            <div className={"column " + classesForColumns[props.columns]}>
              { props.render(col) }
            </div>
          )) }
      </div>
    ))}
  </div>
)

export default RowsOfColumns
