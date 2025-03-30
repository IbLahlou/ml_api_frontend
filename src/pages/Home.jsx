
import React from 'react';
import {
  Box,
  VStack,
  Text,
  Grid,
  Link,
  Flex,
  Icon,
  Button,
  Container,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Home = () => {
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

  const blogs = [
    {
      title: "Scaling ML Models in Production",
      date: "2024-03-15",
      preview: "Best practices for deploying ML models at scale..."
    },
    {
      title: "Data Engineering Best Practices",
      date: "2024-03-10",
      preview: "Modern approaches to building data pipelines..."
    }
  ];

  const articles = [
    {
      title: "The Future of MLOps",
      publication: "Medium",
      date: "2024-02-28",
      link: "https://medium.com/article1"
    },
    {
      title: "Building Resilient Data Pipelines",
      publication: "TowardsDataScience",
      date: "2024-02-15",
      link: "https://medium.com/article2"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning Specialty",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023"
    }
  ];

  const experience = [
    {
      role: "Senior Data Engineer",
      company: "Tech Corp",
      period: "2022-Present",
      description: "Leading data infrastructure development..."
    },
    {
      role: "ML Engineer",
      company: "AI Startup",
      period: "2020-2022",
      description: "Developed and deployed ML models..."
    }
  ];

  const activities = [
    {
      title: "Tech Conference Speaker",
      description: "Regular speaker at ML/AI conferences"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to ML/Data tools"
    }
  ];

  return (
    <Container maxW="container.xl" p={8} color="gray.100">
      <VStack spacing={16} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={4} align="stretch">
            <MotionText
              fontSize="4xl"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to My Portfolio
            </MotionText>
            <Text fontSize="xl" color="gray.400">
              Senior Data Engineer & MLOps Specialist
            </Text>
            <Flex gap={4}>
              <Link href="https://github.com/yourusername" isExternal>
                <Icon as={FaGithub} w={6} h={6} />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
              <Link href="https://twitter.com/yourusername" isExternal>
                <Icon as={FaTwitter} w={6} h={6} />
              </Link>
            </Flex>
          </VStack>
        </MotionBox>

        {/* Projects Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Featured Projects</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
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
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Blogs Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Latest Blog Posts</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {blogs.map((blog, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
              >
                <VStack align="stretch" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold">{blog.title}</Text>
                  <Text color="gray.400">{blog.date}</Text>
                  <Text noOfLines={2}>{blog.preview}</Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Articles Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Published Articles</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {articles.map((article, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
              >
                <VStack align="stretch" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold">{article.title}</Text>
                  <Text color="gray.400">{article.publication} • {article.date}</Text>
                  <Link href={article.link} isExternal>
                    <Button size="sm">Read Article</Button>
                  </Link>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Certifications Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Diplomas and Certifications</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {certifications.map((cert, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
              >
                <VStack align="stretch" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold">{cert.title}</Text>
                  <Text color="gray.400">{cert.issuer} • {cert.date}</Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Experience Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Experience</Text>
          <Grid templateColumns={{ base: '1fr' }} gap={6}>
            {experience.map((exp, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
              >
                <VStack align="stretch" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold">{exp.role}</Text>
                  <Text color="gray.400">{exp.company} • {exp.period}</Text>
                  <Text>{exp.description}</Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Curricular Activities Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Curricular Activities</Text>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {activities.map((activity, index) => (
              <MotionBox
                key={index}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                whileHover={{ scale: 1.02 }}
              >
                <VStack align="stretch" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold">{activity.title}</Text>
                  <Text color="gray.400">{activity.description}</Text>
                </VStack>
              </MotionBox>
            ))}
          </Grid>
        </VStack>

        {/* Contact Section */}
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Contact</Text>
          <MotionBox
            p={6}
            bg={cardBg}
            borderRadius="lg"
            whileHover={{ scale: 1.02 }}
          >
            <VStack align="stretch" spacing={4}>
              <Text>Feel free to reach out for collaborations or queries!</Text>
              <Flex gap={4}>
                <Link href="mailto:your.email@example.com">
                  <Button colorScheme="blue">Email Me</Button>
                </Link>
                <Link href="https://github.com/yourusername" isExternal>
                  <Button leftIcon={<FaGithub />}>GitHub</Button>
                </Link>
              </Flex>
            </VStack>
          </MotionBox>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Home;
