import React, { useState } from 'react'
import css from './Button.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function Button ({ className, isRed, label }) {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const btnClass = classNames(
    css.btn,
    {
      [css.red]: isRed,
      'btn-pressed': isPressed,
      'btn-over': !isPressed && isHovered
    },
    className
  )
  return (
    <button
      className={btnClass}
      onMouseDown={() => { setIsPressed(true) }}
      onMouseUp={() => { setIsPressed(false) }}
      onMouseEnter={() => { setIsHovered(true) }}
      onMouseLeave={() => { setIsHovered(false) }}
    >
      <div className='label'>{label}</div>
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  isRed: PropTypes.bool,
  label: PropTypes.string
}

export default Button
