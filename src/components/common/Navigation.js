import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ data }) => (
    <ul className="categories">
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <li className="entry"><a className="link" href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a></li>
            } else {
                return <li className="entry"><Link className="link" to={navItem.url} key={i}>{navItem.label}</Link></li>
            }
        })}
    </ul>
)

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default Navigation
