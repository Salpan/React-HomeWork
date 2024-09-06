import styled from 'styled-components';

export const EffectorWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    position: relative;

    background: ${(props) => (props.theme === 'LIGHT' ? 'white' : 'darkgray')};
`;

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
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 8px;
    top: 0px;

    & svg {
        height: inherit;
        width: inherit;

        fill: ${(props) => (props.theme === 'LIGHT' ? 'gray' : 'lightgray')};
    }
`;
