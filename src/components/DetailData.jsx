import React from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";

function DetailData({ data }) {
  return (
    <SimpleGrid columns={3} spacing={10}>
      <Box></Box>
      {/* <Box textAlign="center" fontSize="xl">
        <h1>{data.name}</h1>
        <Image src={data.sprites.front_shiny}></Image>
      </Box> */}

      <Box
        align="center"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image boxSize="300px" src={data.sprites.front_shiny} />

        <Box p="6">
          <Box
            mt="1"
            align="center"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {data.name}
          </Box>
          <Box d="flex" align="center" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {data.base_experience} exp &bull; {data.height} height &bull;{" "}
              {data.weight} weight &bull; {data.order} order
            </Box>
          </Box>

          <Box></Box>

          <Box mt="2" alignItems="center">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Abilities
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  pb={4}
                >
                  {data.abilities.map((ab, index) => (
                    <li key={index}>{ab.ability.name}</li>
                  ))}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Stats
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  pb={4}
                >
                  {data.stats.map((st, index) => (
                    <li key={index}>
                      {st.base_stat} base stat &bull; {st.effort} effort &bull;{" "}
                      {st.stat.name}
                    </li>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>

      <Box></Box>
    </SimpleGrid>
  );
}

export default DetailData;
