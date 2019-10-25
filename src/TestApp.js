import React from 'react'
import PropTypes from 'prop-types'
import StoreProvider from 'store/provider'
import { MemoryRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { Style } from 'radium'

import Routing from 'routing'
import theme from 'theme'
import styles from 'styles'


const TestApp = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Style rules={styles} />
      <StoreProvider>
        <Router initialEntries={[props.path]} initialIndex={0}>
          <Routing />
          {props.children}
        </Router>
      </StoreProvider>
    </ThemeProvider>
  )
}


TestApp.propTypes = {
  path: PropTypes.string.isRequired,
}


export default TestApp
