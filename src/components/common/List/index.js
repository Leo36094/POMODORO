import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Item from './components/Item'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

function List (props) {
  const { className, style, ...restProps } = props

  return <ul className={cx('list', className)} style={style} {...restProps} />
}

List.propTypes = propTypes

List.Item = Item

export default List
