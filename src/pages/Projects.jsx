
import React from 'react';
import { VStack, Text, Grid, Link, Button, Container, Box, Flex } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const cardBg = "#2c2e33";
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics platform with machine learning capabilities",
      tech: ["Python", "React", "TensorFlow"],
      repo: "https://github.com/yourusername/ai-analytics",
      demo: "https://demo-link.com"
    },
    {
      title: "Blockchain Data Pipeline",
      description: "ETL pipeline for processing blockchain transactions",
      tech: ["Scala", "Apache Spark", "AWS"],
      repo: "https://github.com/yourusername/blockchain-pipeline",
      demo: "https://demo-link.com"
    },
    {
      title: "MLOps Automation Framework",
      description: "Automated ML model deployment and monitoring system",
      tech: ["Python", "Docker", "Kubernetes"],
      repo: "https://github.com/yourusername/mlops-framework",
      demo: "https://demo-link.com"
    }
  ];

  return (
    <Container maxW="container.xl" p={8} color="gray.100">
      <VStack spacing={6} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">Featured Projects</Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {projects.map((project, index) => (
            <Box
              key={index}
              p={6}
              bg={cardBg}
              borderRadius="lg"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <VStack align="stretch" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">{project.title}</Text>
                <Text color="gray.400">{project.description}</Text>
                <Flex gap={2} flexWrap="wrap">
                  {project.tech.map(tech => (
                    <Text key={tech} fontSize="sm" color="blue.300">#{tech}</Text>
                  ))}
                </Flex>
                <Flex gap={4}>
                  <Link href={project.repo} isExternal>
                    <Button size="sm" leftIcon={<FaGithub />}>Code</Button>
                  </Link>
                  <Link href={project.demo} isExternal>
                    <Button size="sm" leftIcon={<FaExternalLinkAlt />}>Demo</Button>
                  </Link>
                </Flex>
              </VStack>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Projects;
