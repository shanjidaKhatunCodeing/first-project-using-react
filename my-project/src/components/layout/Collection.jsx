import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import sweater from '../../assets/sweater.png'
import jeans from '../../assets/jeans.png'
import baskets from '../../assets/baskets.png'

const Collection = () => {
  return (
    <div className='mt-[220px]'>
        <Container style='container mx-auto'>
            <Heading style="font-fra text-[65px] font-bold text-center" text="New Collection" as="h2"/>
            <div className='mt-[110px]'>
                <Flex style='justify-between'>
                    <Image src={sweater}/>
                    <Image src={jeans}/>
                    <Image src={baskets}/>
                </Flex>
            </div>
        </Container>
    </div>
  )
}

export default Collection