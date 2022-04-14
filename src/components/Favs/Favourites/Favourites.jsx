import styled from "styled-components";
import { favourites } from "../../../services/data";
import Favourite from "../Favourite/Favourite";

const Container = styled.div``;

const FavouritesHeader = styled.h1`
    text-align: center;
    padding-top: 20px;
`;

const FavouriteSection = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Favourites = () => {
    return (
        <Container>
            <FavouritesHeader>Your Favourites</FavouritesHeader>
            <FavouriteSection>
                {favourites.map((favourites) => (
                    <Favourite item={favourites} key={favourites.id} />
                ))}
            </FavouriteSection>
        </Container>
    );
};

export default Favourites;
