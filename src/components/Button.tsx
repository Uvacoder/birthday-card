import styled from 'styled-components'
import palette from '../theme/palette'

const ButtonWrapper = styled.button`
    user-select: none;
    border-radius: 10px;
    background: ${palette.colors.light};
    border-width: 5px;
    border-color: black;
    padding: 1vw;
    border-style: solid;
    color: black;
    font-weight: 900;
    cursor: pointer;
    box-shadow: 5px 5px #888888;
    &:active{
        box-shadow: 1px 1px #888888;
        transform: translateY(4px) translateX(4px);
    }
`

export default function Button(props){
    return(
        <ButtonWrapper onClick={props.onClick}>
            {props.children}
        </ButtonWrapper>
    )
}