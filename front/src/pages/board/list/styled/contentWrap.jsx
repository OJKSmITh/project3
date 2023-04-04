import styled from 'styled-components';

export const ContentWrap = styled.div`
    background-color: #a6b8c4;
    display: flex;
    flex-direction:column;
    align-items:center;
    width:1500px;
    min-height:680px;
    height: 77%;
    margin: 20px auto;
    padding: 40px 0 20px 0;

    height: 460px;
    overflow: auto;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        display: none;
    }
`