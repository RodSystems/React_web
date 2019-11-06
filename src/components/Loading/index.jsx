import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {

    if (props.active) {
        return (<div>Loading...</div>);
    }

    return null;
};

Loading.defaultProps = {
    active: true,
};

Loading.propType = {
    active: PropTypes.bool
};

export default Loading;