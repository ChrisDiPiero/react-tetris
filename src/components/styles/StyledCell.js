import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    background: rgba( ${ props => props.color }, 0.8 );
    border: ${ props => ( props.type === 0 ? '0px solid' : '4xp solid' ) };
    border-bottom-color: rgba( ${ props => props.color }, 0.1 );
    border-bottom-color: rgba( ${ props => props.color }, 1 );
    border-bottom-color: rgba( ${ props => props.color }, 1 );
    border-bottom-color: rgba( ${ props => props.color }, 0.3 );
`