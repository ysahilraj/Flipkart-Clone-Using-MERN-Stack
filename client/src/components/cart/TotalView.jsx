import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px;
    color: green;
`;

const TotalView = ({ cartItems }) => {
    let price = 0;
    let discount = 0;

    if (cartItems && cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
            price += cartItems[i].price.mrp;
            discount += cartItems[i].price.mrp - cartItems[i].price.cost;
        }
    }

    const totalAmount = price - discount + 40;
    const savings = discount - 40;

    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems ? cartItems.length : 0} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <TotalAmount>Total Amount
                    <Price>₹{totalAmount}</Price>
                </TotalAmount>
                <Discount>You will save ₹{savings} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalView;
