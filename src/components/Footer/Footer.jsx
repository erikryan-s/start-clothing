import { GitHub, LinkedIn, MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    padding: 0px 10px;
    word-wrap: normal;
    display: inline-block;
    color: black;
    cursor: pointer;
    &:link {
        text-decoration: none;
    }
    &:visited {
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
    }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>START.</Logo>
                <Desc>
                    Founded in 2022 by me, Erik Serrano, START. was created as
                    an e-commerce website built using React and Firestore.
                    Featuring a design based on the END clothing webstore.
                </Desc>
                <SocialContainer>
                    <SocialIcon
                        as="a"
                        href="https://github.com/erikryan-s"
                        color="000000">
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon
                        as="a"
                        href="https://www.linkedin.com/in/erik-serrano"
                        color="000000">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Link to="/">
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link to="/products">
                        <ListItem>Products</ListItem>
                    </Link>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> P. Sherman 42
                    Wallaby Way.
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +61 420 216 717
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    erik1998serrano@outlook.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
