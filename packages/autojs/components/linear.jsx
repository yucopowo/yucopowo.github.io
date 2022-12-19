import React from 'react';
import styled from 'styled-components';

const StyledLinear = styled.div`
  display: flex;
`;

const Linear = (props) => {
    return (
        <StyledLinear className="linear" {...props}>
            {props.children}
        </StyledLinear>
    );
};

export default Linear;
