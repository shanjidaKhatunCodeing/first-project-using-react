import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import fashion from '../../assets/fashion (1).png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const Fashion = () => {
  return (
    <div className='my-[140px]'>
        <Container style='container mx-auto'>
            <Flex style='justify-between'>
                <Image src={fashion}/>
                <div className='ml-[60px]'> 
                    <Heading style="font-fra text-[65px] font-bold pt-[110px] pb-[80px]" text="Best Fashion Since 2010" as="h2"/>
                    <Paragraph style="font-pop text-2xl font-semibold" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Fashion