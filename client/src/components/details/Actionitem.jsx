import React from 'react'
import { Box,styled,Button } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { post } from '../../utils/paytm';

import {payUsingPaytm} from '../../service/api'



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
   [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
const Image = styled('img')({
    paddding:'15px',
    
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    borderRadius: 2,
    height: 50,
    [theme.breakpoints.down('md')]: {
        width: '44%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}));

const Actionitem = ({product}) => {

    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }


  return (
    <LeftContainer>
        <Box style={{ padding: '15px 15px', border: '1px solid #f0f0f0',width: '90%'}}>
        <Image src={product.detailUrl} alt=""  />
        </Box>
        <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
        <StyledButton onClick={() => buyNow()}  style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        
    </LeftContainer>
  )
}

export default Actionitem
