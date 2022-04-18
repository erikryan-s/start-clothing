import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { products } from "../../services/data";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

const Container = styled.div``;

const ItemContainer = styled.div`
    padding: 50px;
    display: flex;
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <ItemContainer>
                {products.map((item) => (
                    <ProductInfo item={item} key={item.id} />
                ))}
            </ItemContainer>
            <Footer />
        </Container>
    );
};

export default Product;
