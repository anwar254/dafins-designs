import styled from 'styled-components'

export default styled.h1`
    font-family: ${props => (props.theme.primaryFont ? props.theme.font : props.theme.fontTwo)};
    text-align: center;
    color: #4a4a4a;
    font-size: 25px;
    text-transform: ${props => (props.upper ? 'uppercase' : 'inherit')}
`;
