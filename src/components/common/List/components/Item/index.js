import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Meta from './components/Meta'

// Style
import styles from './style.module.scss'

// Variables / Functions
const cx = classnames.bind(styles)

export const propTypes = {
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.any,
  hasBorder: PropTypes.bool,
}

function Item (props) {
  const { prefix, suffix, className, children, hasBorder, ...restProps } = props

  return (
    <li className={cx('list-item', className)} data-has-border={hasBorder} {...restProps}>
      {prefix}
      {children}
      <div className={cx("list-item__suffix")}>
        {suffix}
      </div>
    </li>
  )
}

Item.propTypes = propTypes

Item.Meta = Meta

export default Item
