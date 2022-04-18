import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div``;

const HomeOutlet = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default HomeOutlet;
