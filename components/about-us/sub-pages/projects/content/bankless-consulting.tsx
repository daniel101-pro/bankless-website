import { Box, Text, Stack, Flex, Image, Heading, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectBanklessConsultingComponent() {
  return (
    <Stack
      align={'flex-start'}
      width={{ md: '800px', lg: '1000px' }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        flex={1}
        justify={'center'}
        alignItems={'center'}
        position={'relative'}
        w={'full'}
      >
        <Box
          position={'relative'}
          height={{ base: '300px', sm: '350px' }}
          width={{ base: '300px', sm: '350px' }}
          boxShadow={'2xl'}
          overflow={'hidden'}
        >
          <Image
            alt={'Bankless logo'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src='/images/bankless-dao-coffee-shop.png'
          />
        </Box>
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 4 }}>
        <Heading
          color={'gray.100'}
          fontWeight={700}
          mt={{ base: '32px', md: '0' }}
          fontSize={{ base: '20px' }}
        >
          BANKLESS CONSULTING
        </Heading>
        <Text
          color={'gray.100'}
          width={{ base: '300px', sm: '350px', xl: '500px' }}
          lineHeight={{
            base: '20px',
            sm: '27px',
            md: '30px',
            lg: '30px',
            xl: '45px',
          }}
          textAlign='justify'
          fontSize={{ base: '16px', sm: '20px' }}
        >
          Bankless Consulting is the consulting services arm of BanklessDAO. It
          connects over 15,000+ talented Web3 natives to professional services
          in marketing, tech, legal, finance, and management. Bankless
          Consulting helps decentralized, Web3-native, and traditional
          businesses leverage the power of Web3.
        </Text>
        <Stack
          direction={{ base: 'row', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <Link href={'https://www.banklessconsulting.com'} isExternal>
            <Flex align={'center'} color={'white.100'}>
              Learn More <FiArrowUpRight />
            </Flex>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
