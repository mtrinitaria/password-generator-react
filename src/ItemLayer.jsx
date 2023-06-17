import React, { useEffect, useState } from 'react'
import { Input, Grid } from '@mui/material'

/* public */
const ItemLayer = (data) => {
  // let inputValue = data.inputValue
  let [val, setVal] = useState(data.inputValue)
  // setVal(data.inputValue)
  // setTimeout(() => {
  //   setVal('16')
  // })
  // console.log(inputValue)
  useEffect(() => {
    setVal(data.inputValue)
  })
  let onChange = (e) => {
    // setVal(e.target.value)
    setVal(e.target.value)
    console.log('onChange', data.inputValue, e.target.value)
  }
  return (
    <>
      <Grid
        item
        xs={12}
        className='layer'
      >
        <Grid
          item
          xs={3}
        >
          <p>{data.label}</p>
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Input
            variant='contained'
            id={data.id}
            defaultValue={val || ''}
            // defaultValue={inputValue || ''}
            onChange={onChange}
          ></Input>
        </Grid>
      </Grid>
    </>
  )
}
export default ItemLayer
