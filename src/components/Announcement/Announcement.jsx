import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Link to={{ pathname: "/products" }} style={{ textDecoration: "none" }}>
            <Container>
                NEW IN: CARHARTT WIP | GRAMICCI | STONE ISLAND
            </Container>
        </Link>
    );
};

export default Announcement;
