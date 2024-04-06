import React, { useState } from "react";
import { Box, Input, Button, Text, Stack, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const database = [
    { id: 1, title: "Introduction to React", description: "Learn the basics of React framework" },
    { id: 2, title: "Advanced React Patterns", description: "Dive into advanced React concepts and patterns" },
    { id: 3, title: "React Native Fundamentals", description: "Build mobile apps with React Native" },
    { id: 4, title: "React State Management", description: "Manage state in React applications effectively" },
    { id: 5, title: "React Testing Techniques", description: "Learn testing strategies for React components" },
  ];

  const searchDatabase = () => {
    const expandedQuery = expandQuery(query);
    const filteredResults = database.filter((item) => item.title.toLowerCase().includes(expandedQuery) || item.description.toLowerCase().includes(expandedQuery));
    setResults(filteredResults);
  };

  const expandQuery = (query) => {
    // Perform NLP techniques to expand the query
    // This is a simplified example, you can integrate more advanced NLP libraries
    const expandedTerms = query.toLowerCase().split(" ");
    expandedTerms.push("guide", "tutorial", "course"); // Add related terms
    return expandedTerms.join(" ");
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Search Database
      </Heading>
      <Stack direction="row" mb={4}>
        <Input placeholder="Enter search query" value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={searchDatabase}>
          Search
        </Button>
      </Stack>
      {results.length > 0 ? (
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Search Results:
          </Heading>
          <UnorderedList>
            {results.map((item) => (
              <ListItem key={item.id}>
                <Text fontWeight="bold">{item.title}</Text>
                <Text>{item.description}</Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ) : (
        <Text>No results found.</Text>
      )}
    </Box>
  );
};

export default Index;
