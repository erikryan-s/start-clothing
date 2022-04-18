import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { products } from "../../services/data";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;

const ProductsHeader = styled.h1`
    text-align: center;
    padding-top: 20px;
`;

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const AllProducts = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>All Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option defaultValue>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductsHeader>All Products</ProductsHeader>
            <ProductsContainer>
                {products.map((item) => (
                    <ProductsSection item={item} key={item.id} />
                ))}
            </ProductsContainer>
            <Footer />
            <Outlet />
        </Container>
    );
};

export default AllProducts;
