import * as React from 'react'
import './styles.css'

export var ProgressBar = ({ width }) => {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    setValue(width)
  })

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${value}px` }} className="progress" />
    </div>
  )
}
