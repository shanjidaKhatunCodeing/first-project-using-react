import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className='bg-bannerColo py-[30px]'>
        <Container style='container mx-auto'>
            <Flex style='justify-between'>
                <div className='w-1/4'>
                    <Image src={logo}/>
                </div>
                <div className='w-1/2'>
                   <ul>
                   <Flex style='justify-between'>
                        <List href="#" text="Men"/>
                        <List href="#" text="Woman"/>
                        <List href="#" text="Kids"/>
                        <List href="#" text="Collection"/>
                        <List href="#" text="Trends"/>
                    </Flex>
                   </ul>
                </div>
                <div className='w-1/4'>
                    <Button style='font-pop text-2xl font-semibold py-[5px] px-[10px] ml-[70px] border-2 rounded-lg hover:bg-hoverBtnColo' text='Log In'/>
                    <Button style='font-pop text-2xl font-semibold py-[5px] px-[10px] ml-[10px] border-2 rounded-lg hover:bg-hoverBtnColo' text='Sign up'/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar