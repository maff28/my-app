import React from 'react'
import { useIntl } from 'react-intl';

const Component = () => {
    const { formatMessage } = useIntl();
    return (
        <div>Component</div>
    );
};

export default Component;