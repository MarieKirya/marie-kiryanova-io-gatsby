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
  <div style={props.style}>
    { splitEvery(props.data, props.columns).map((row, rowIndex) => (
      <div key={rowIndex} className="columns">
        { row.map((col, colIndex) => (
            <div key={colIndex} className={"column " + classesForColumns[props.columns]}>
              { props.render(col) }
            </div>
          )) }
      </div>
    ))}
  </div>
)

export default RowsOfColumns
