import React from 'react';
import { Box, Grid, VStack, Text, useColorModeValue, Icon, Flex, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaDatabase, FaServer } from 'react-icons/fa';

const MotionBox = motion(Box);

const Home = () => {
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const cardBg = useColorModeValue('gray.700', 'gray.800');

  const projects = [
    {
      title: "Project Alpha",
      description: "Cloud infrastructure management system",
      tech: ["React", "Node.js", "AWS"],
      icon: FaServer
    },
    {
      title: "Database Explorer",
      description: "Advanced database visualization tool",
      tech: ["Python", "PostgreSQL", "Redis"],
      icon: FaDatabase
    },
    {
      title: "Code Analytics",
      description: "Real-time code analysis platform",
      tech: ["TypeScript", "Express", "MongoDB"],
      icon: FaCode
    },
    {
      title: "Git Manager",
      description: "Git repository management tool",
      tech: ["React", "GraphQL", "Docker"],
      icon: FaGithub
    }
  ];

  return (
    <Box p={8} bg={bgColor} minH="100vh" color="white">
      <VStack spacing={8} align="stretch">
        <Box mb={10}>
          <Text fontSize="4xl" fontWeight="bold" mb={2}>
            Terminal Portfolio
          </Text>
          <Text color="gray.400">
            Full-stack Developer & System Administrator
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              bg={cardBg}
              p={6}
              borderRadius="md"
              boxShadow="lg"
              border="1px solid"
              borderColor="gray.600"
            >
              <Flex align="center" mb={4}>
                <Icon as={project.icon} boxSize={6} mr={3} color="cyan.400" />
                <Text fontSize="xl" fontWeight="semibold">
                  {project.title}
                </Text>
              </Flex>
              <Text color="gray.400" mb={4}>
                {project.description}
              </Text>
              <Flex gap={2} flexWrap="wrap">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    colorScheme="cyan"
                    variant="subtle"
                    px={2}
                    py={1}
                  >
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </MotionBox>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Home;