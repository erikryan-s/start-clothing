import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { products } from "../../services/data";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useParams, Link } from "react-router-dom";

const Container = styled.div``;

const ItemContainer = styled.div`
    padding: 50px;
    display: flex;
`;

// route: /products/:productId
const ProductPage = () => {
    let { productId } = useParams();
    const item = products.find(
        (product) => product.id === parseInt(productId, 10),
    );
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Link
                to={`products/:${item.id}`}
                style={{ textDecoration: "none" }}>
                <ItemContainer>
                    <ProductInfo item={item} />
                </ItemContainer>
            </Link>
            <Footer />
        </Container>
    );
};

export default ProductPage;
