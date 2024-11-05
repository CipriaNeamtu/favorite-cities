import { Flex, Link } from '@chakra-ui/react'
import { ColorModeButton } from "@/components/ui/color-mode";
import { PAGE } from '../constants'

const Nav = () => {
  return (
    <Flex>
      <Link href={PAGE.HOME}>Home</Link>
      <Link href={PAGE.CITY}>City</Link>
      <Link href={PAGE.FAVORITES}>Favorites</Link>
      <ColorModeButton />
    </Flex>
  )
}

export default Nav