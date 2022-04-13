import styled from "styled-components";
import { popularProducts } from "../../../data";
import Product from "../Product/Product";

const Container = styled.div``;

const Favourites = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const FavouritesHeader = styled.h1`
    text-align: center;
    padding-top: 20px;
`;

const Products = () => {
    return (
        <Container>
            <FavouritesHeader>Your Favourites</FavouritesHeader>
            <Favourites>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Favourites>
        </Container>
    );
};

export default Products;
