import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // Fetch market data from an API or use mock data
    const mockData = [
      { name: "S&P 500", value: "4,500.50", change: "+0.5%" },
      { name: "Dow Jones", value: "35,000.00", change: "-0.2%" },
      { name: "Nasdaq", value: "14,000.00", change: "+1.2%" },
    ];
    setMarketData(mockData);
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
        {/* Top News Section */}
        <Box as="section" gridColumn={{ md: "span 2" }}>
          <Heading as="h2" size="lg" mb={4}>Top News</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text mt={2}>Summary of the news article goes here...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text mt={2}>Summary of the news article goes here...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Headline 3</Heading>
              <Text mt={2}>Summary of the news article goes here...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Market Data Sidebar */}
        <Box as="aside" bg="gray.50" p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            {marketData.map((data, index) => (
              <Box key={index} p={4} bg="white" shadow="sm" borderWidth="1px">
                <Text fontWeight="bold">{data.name}</Text>
                <Text>{data.value}</Text>
                <Text color={data.change.startsWith("+") ? "green.500" : "red.500"}>{data.change}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box>
            <Heading as="h4" size="md">Contact Information</Heading>
            <Text mt={2}>Email: contact@financialtimes.com</Text>
            <Text>Phone: +123 456 7890</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">Privacy Policy</Heading>
            <Text mt={2}>Read our privacy policy <Link color="teal.200" href="#">here</Link>.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md">Follow Us</Heading>
            <Text mt={2}>Social media links go here.</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;