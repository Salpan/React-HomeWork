import styled from "styled-components";

export const EffectorWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: ${(props) => (props.theme === 'LIGHT' ? 'white' : 'rgb(58, 58, 58)')};
`

export const ThemeButton = styled.button`
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    height: 48px;
    width: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 0px;

    & svg {
        height: inherit;
        width: inherit;

        fill: ${(props) => (props.theme === 'LIGHT' ? 'black' : 'white')};
    }
`
export const Header = styled.h3`
color: ${(props) => (props.theme === 'LIGHT' ? 'black' : 'white')};
`

export const EffectorCommentary = styled.div`
    max-width: 280px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 2px 2px 4px rgba(0, 0, 255, 0.2);
    background-color: ${(props) => (props.theme === 'LIGHT' ? 'black' : 'white')};
    align-self: ${(props) => (props.commentId % 2 ? 'start' : 'end')}
`

export const EffectorCommentaryText = styled.div`
    margin-right: 8px;
    color: ${(props) => (props.theme === 'DARK' ? 'black' : 'white')};
`


