import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyle
} from './style'

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyle color={color}>
        <ValueStyled>{value}</ValueStyled>
        <ValueStyled>{label}</ValueStyled>
      </CardContentStyle>
    </CardUI>
  )
}

export default memo(Card)