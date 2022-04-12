import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Announcement = () => {
    return (
        <Container>NEW IN: CARHARTT WIP | GRAMICCI | STONE ISLAND</Container>
    );
};

export default Announcement;
