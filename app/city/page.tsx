import { Button } from "@/components/ui/button"
import { Container, Flex, Text} from "@chakra-ui/react"


const Page = () => {
	return (
		<Container >
			<Text>City</Text> 
			<Flex align='center' justify='center' mt='5' gap={'2'}> 
				<Button colorPalette='blue'>Button 1</Button>
				<Button>Button 2</Button>
			</Flex>
    </Container>
	)
}

export default Page;