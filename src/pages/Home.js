import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Div from 'components/Div'
import Wrapper from 'components/Wrapper'
import Paragraph from 'components/Paragraph'
import Img from 'components/Image'
import breakpoints from 'styles/breakpoints'
import hand from 'assets/hand.jpg'

function HomePage() {
  return (
    <Wrapper>
      <Div center>
        <Img>
          <img src={hand} />
        </Img>
      </Div>
    </Wrapper>
  )
}

export default HomePage
