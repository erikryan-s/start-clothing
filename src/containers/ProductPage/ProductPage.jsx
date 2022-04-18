import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { products } from "../../services/data";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useParams } from "react-router-dom";

const Container = styled.div``;

const ItemContainer = styled.div`
    padding: 50px;
    display: flex;
`;

// route: /products/:productId
const ProductPage = () => {
    let { productId } = useParams();
    console.log(productId);
    const item = products.find(
        (product) => product.id === parseInt(productId, 10),
    );
    console.log(productId);
    return (
        <Container>
            <Navbar />
            <Announcement />
            <ItemContainer>
                <ProductInfo item={item} />
            </ItemContainer>
            <Footer />
        </Container>
    );
};

export default ProductPage;
