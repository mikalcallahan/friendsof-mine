/*
 * Button.js
 *
 * @returns button
 */

import styled from 'styled-components'

const Paragraph = styled.p`
  align-items: center;
  display: flex;
  font-size: ${props => (props.sm ? '1.5rem' : '2rem')};
  font-weight: 400;
  letter-spacing: .03em;
  margin: auto;
  justify-content: center;
  text-align: center;
  width: auto;
`

export default Paragraph
