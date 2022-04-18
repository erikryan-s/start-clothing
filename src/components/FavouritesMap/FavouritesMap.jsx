import styled from "styled-components";
import { favourites } from "../../services/data";
import FavouritesSection from "../FavouritesSection/FavouritesSection";

const Container = styled.div``;

const FavouritesHeader = styled.h1`
    text-align: center;
    padding-top: 20px;
`;

const FavouritesContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const FavouritesMap = () => {
    return (
        <Container>
            <FavouritesHeader>Your Favourites</FavouritesHeader>
            <FavouritesContainer>
                {favourites.map((item) => (
                    <FavouritesSection item={item} key={item.id} />
                ))}
            </FavouritesContainer>
        </Container>
    );
};

export default FavouritesMap;
