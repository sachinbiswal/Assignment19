import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { productContext } from '../ProductContext/ProductContext';
import {
    Card, CardHeader, CardBody, CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
    Center,
    Box
} from '@chakra-ui/react'
import './Product.css'
const Product = () => {
    // const [product, setproduct] = useState([])
    const { state, updateState } = useContext(productContext)
    // console.log(state);
    useEffect(() => {
        axios.get(" https://fakestoreapi.com/products").then((res) => {
            // console.log(res.data);
            updateState("products", res.data)
        }).catch((error) => {
            alert("error")
        })
    }, [])
    return (
        <div className='CardContainer'>
            {state.products.map((ele) => {
                return <>

<Box w='360px' h='460px' my={5}>

                    <Card maxW='100%' h='100%' boxShadow='dark-lg' p='2' rounded='md' bg='white' m='1rem' >
                        <CardBody >
                            <Center>
                                <Box h='160px' w='210px'>

                                    <Image h='100%' w='100%'
                                        src={ele && ele.image}
                                        alt='product image'
                                        borderRadius='lg'
                                    />
                                </Box>
                            </Center>


                            <Stack mt='5' spacing='2'>
                                <Heading size='md'>{ele && ele.category}</Heading>
                                <Text height='80px' >
                                
                                    {ele && ele.title}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    $ {ele && ele.price}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <Center>
                            <CardFooter >

                                <Button variant='solid' colorScheme='blue' p='20px'
                                onClick={()=>{updateState("cart",ele)}}
                                >
                                    Add to cart
                                </Button>

                            </CardFooter>
                        </Center>
                    </Card>
</Box>

                </>
            })}
        </div>
    )
}

export default Product