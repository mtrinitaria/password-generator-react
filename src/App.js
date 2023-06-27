import React, { useEffect, useState, ReactComponent } from 'react'
import './App.scss'
import { ReactComponent as Logo } from './logo.svg'
import { Button, Divider, Container, Grid, Input } from '@mui/material/'
/* 
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '1234567890';
const SYMBOLS = '!@#$%^&*()';
const ALLCHAR = LETTERS + LETTERS.toUpperCase() + NUMBERS + SYMBOLS;

let randomizeArray = (arr) => {
  let randomized = arr
      .map(val=>({value: val, rand: Math.random() }))
      .sort((a, b) => a.rand - b.rand)
      .map(val=>val.value)

  return randomized;
}
let randomizeStr = (str, length) => {
  let randomized = randomizeArray(str.split(''))

  return randomized.splice(0, length).join('');
}

// has at least 1 each of letter, capital letter, number and symbol
let getStrongRandomChar = (length) => {
  let tempRandom = randomizeStr(ALLCHAR, length - 2)

  let randLetter = randomizeStr(LETTERS, 1)
  let randCapital = randomizeStr(LETTERS.toUpperCase(), 1)
  let randNumber = randomizeStr(NUMBERS, 1)
  let randSymbol = randomizeStr(SYMBOLS, 1)

  return randomizeArray([tempRandom , randCapital , randNumber , randSymbol]).join('')
}

let atLeast1RandomChar = getStrongRandomChar(10)
let randomChar = randomizeStr(ALLCHAR, 10)

console.log('Weaker password. Random character: ', randomChar)
console.log('Stronger password. Has at least 1 each of letter, capital letter, number and symbol: ', atLeast1RandomChar)


let counter = 0;
let lastN = null;
let flipped0 = 0;
let flipped1 = 0;
let flip = (a) => {
    console.log(a, counter)
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            if (a[i] === 1) flipped0 ++;
            else if (a[i] === 0) flipped1 ++
            
        }
        else {
            if (a[i] === 0) flipped0 ++;
            else if (a[i] === 1) flipped1 ++
            
        }
    }

    lastN = a
    counter ++
}
flip([1,1,0,1,1])
console.log(flipped0, flipped1)

let count1 = 0;
let count2 = 0;
let group0 = [];
let group1 = [];
let group0_1 = [];
let group1_0 = [];
let flip = (a) => {
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            group0.push(a[i])
        }
        else {
            group1.push(a[i])
        }
    }
    count1 = group0.filter(a=>a===1).length + group1.filter(a=>a===0).length
    console.log('..', group0.filter(a=>a===1).length)
    console.log('..', group1.filter(a=>a===0).length)
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 1) {
            group1_0.push(a[i])
        }
        else {
            group0_1.push(a[i])
        }
    }
    count2 = group0_1.filter(a=>a===0).length + group1_0.filter(a=>a===1).length
    console.log('>>', group0_1.filter(a=>a===0).length)
    console.log('>>', group1_0.filter(a=>a===1).length)
}
flip([1,0,1,0,1,1])
console.log(group0, group1, count1, count2)




let count1 = 0;
let count2 = 0;
let group0 = [];
let group1 = [];
let flip = (a) => {
    for (var i = 0; i < a.length; i++) {
        group0.push(i % 2)
        group1.push((i+1) % 2)
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== group0[i]) {
            count1 ++
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== group1[i]) {
            count2 ++
        }
    }
}
flip([1,1,0,1,1])
console.log(group0, group1, count1, count2)


*/
function App() {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
  const NUMBERS = '1234567890'
  const SYMBOLS = '.@$!%*#?&><)(^-_'
  const ALLCHAR = LETTERS + LETTERS.toUpperCase() + NUMBERS + SYMBOLS

  const randomizeArray = (arr) => {
    const randomized = arr
      .map((val) => ({ value: val, rand: Math.random() }))
      .sort((a, b) => a.rand - b.rand)
      .map((val) => val.value)

    return randomized
  }
  const randomizeStr = (str, length) => {
    const randomized = randomizeArray(str.split(''))

    return randomized.splice(0, length).join('')
  }

  // has at least 1 each of letter, capital letter, number and symbol
  let getStrongRandomChar = (length) => {
    let tempRandom = randomizeStr(ALLCHAR, length - 4)

    let randLetter = randomizeStr(LETTERS, 1)
    let randCapital = randomizeStr(LETTERS.toUpperCase(), 1)
    let randNumber = randomizeStr(NUMBERS, 1)
    let randSymbol = randomizeStr(SYMBOLS, 1)

    return randomizeArray([
      tempRandom,
      randCapital,
      randNumber,
      randSymbol,
      randLetter,
    ]).join('')
  }

  // let atLeast1RandomChar = getStrongRandomChar(10)
  // let randomChar = randomizeStr(ALLCHAR, 10)

  const [passLength, setPassLength] = useState(10)
  const [strongRandomChar, setStrongRandomChar] = useState('')
  const generatePass = () => {
    console.log('passLength, ', passLength)
    console.log(getStrongRandomChar(passLength))
    setStrongRandomChar(getStrongRandomChar(passLength))
  }

  const copyPass = () => {
    var copyText = document.querySelector('#new-pass')

    copyText.select()
    copyText.setSelectionRange(0, 99999) /*For mobile devices*/

    document.execCommand('copy')
  }

  const onChangePassLength = (e) => {
    console.log(e.target.value)
    setPassLength(e.target.value)
  }

  const onChangeNewPass = (e) => {
    console.log(e.target.value)
    setPassLength(e.target.value)
  }

  return (
    <Container
      className='app'
      sx={{ my: '2rem' }}
    >
      <Grid
        className='layers'
        container
        spacing={2}
        columnGap={4}
      >
        <Grid item>
          <h1>Password Generator</h1>
        </Grid>
        <Grid item>
          {/* <img src={Logo} /> */}
          <Logo />
        </Grid>
      </Grid>
      <Divider sx={{ my: '2rem' }} />
      <Grid
        className='layers'
        container
        spacing={2}
        columnGap={4}
      >
        <Grid
          item
          xs={12}
          className='layer'
        >
          <Grid
            item
            xs={3}
          >
            <p>Password Length:</p>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <Input
              variant='contained'
              id='password-length'
              defaultValue={passLength}
              // defaultValue={inputValue || ''}
              onChange={onChangePassLength}
            ></Input>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          className='layer'
        >
          <Grid
            item
            xs={3}
          >
            <p>New Password:</p>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <Input
              variant='contained'
              id='new-pass'
              value={strongRandomChar}
              // defaultValue={inputValue || ''}
              // onChange={onChangeNewPass}
            ></Input>
          </Grid>
        </Grid>

        {/* <ItemLayer
          label='Password Length:'
          inputValue={passLength}
        />
        <ItemLayer
          label='New Password:'
          id='new-pass'
          inputValue={strongRandomChar}
        /> */}
      </Grid>
      <Divider sx={{ my: '2rem' }} />
      <Grid
        container
        spacing={2}
        className='layers'
      >
        <Grid item>
          <Button
            variant='contained'
            onClick={generatePass}
          >
            Generate
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            onClick={copyPass}
          >
            Copy
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: '2rem' }} />
      <p className='info'>
        <em>
          The generated password has at least 1 each of lowercase letter,
          uppercase letter, number and symbol
        </em>
      </p>
      <p className='info'>
        <em>
          Repository codes can be found here in my{' '}
          <a
            href='https://github.com/mtrinitaria/password-generator-react'
            target='_blank'
            title='Mykhel Trinitaria Github'
          >
            Github
          </a>
          .
        </em>
      </p>
    </Container>
  )
}

export default App
