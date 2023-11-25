import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Image from '../Image'
import saeaterFashion from '../../assets/saeaterFashion.png'
import jeansFashion from '../../assets/jeansFashion .png'

const Product = () => {
  return (
    <div className='pt-[45px] pb-[180px] bg-fotterBgColo'>
        <Container style='container mx-auto'>
            <Flex style='justify-between'>
                <div className='w-1/2 mr-[100px]'>
                    <Heading style="font-fra text-[64px] font-bold text-white" text="Best Seller Product" as="h2"/>
                    <Paragraph style="font-fra text-2xl py-[40px] font-bold text-white" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
                    <Button style="font-pop text-[24px] font-semibold text-white bg-black px-[50px] py-[10px] rounded-lg " text="Learn MORE"/>
                </div>
                <div className='w-1/2'>
                    <Flex style='justify-between'>
                    <Image style="w-1/2 mr-[20px]" src={saeaterFashion}/>
                    <Image style="w-1/2 mr-[20px]" src={jeansFashion}/>
                    
                    </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Product