import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div``;

const Products = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default Products;
