import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Image from '../Image'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='bg-bannerColo py-[70px]'>
        <Container style='container mx-auto'>
            <Flex style='justify-between'>
                <div className='w-1/2'>
                    <Heading style="font-pop text-[70px] font-semibold mr-[60px]" text="Find The Best Fashion Style For You" as="h1"/>
                    <Paragraph style="font-pop text-[20px] font-normal pt-[38px] pb-[50px] mr-[60px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
                    <Button style="font-pop text-[22px] font-semibold text-white bg-black px-[50px] py-[10px] rounded-lg " text="SHOP NOW"/>
                </div>
                <div className='w-1/2 ml-[120px]'>
                    <Image src={bannerImg}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Banner