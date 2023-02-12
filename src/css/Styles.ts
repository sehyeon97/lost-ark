import styled from "styled-components"

const MyHeader = styled.header`
    background: #696969;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MyDarkMode = styled.div`
    background: ${props => props.color};
    color: ${props => props.property};
`;

export const MyBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5%;
`;

export const PictureInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid;
    border-color: #696969;
`;

export const MyFooter = styled.footer`
    background: #696969;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default MyHeader;