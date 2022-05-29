import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { Sidebar } from "../components/Sidebar";

import { Header as HeaderComponent } from "../components/Header";
import Header from 'next/head';

const Chart = dynamic(() => import("react-apexcharts"), {
   ssr: false
});

export const options: ApexOptions = {
   colors: [theme.colors.blue[500]],
   chart: {
      toolbar: {
         show: false
      },
      zoom: {
         enabled: false
      },
      foreColor: theme.colors.gray[500]
   },
   grid: {
      show: false
   },
   dataLabels: {
      enabled: false
   },
   tooltip: {
      enabled: false
   },
   xaxis: {
      type: "datetime",
      axisBorder: {
         color: theme.colors.gray[600]
      },
      axisTicks: {
         color: theme.colors.gray[600]
      },
      categories: [
         "2021-05-9T00:00:00.000Z",
         "2021-05-12T00:00:00.000Z",
         "2021-05-15T00:00:00.000Z",
         "2021-05-18T00:00:00.000Z",
         "2021-05-23T00:00:00.000Z",
         "2021-05-26T00:00:00.000Z",
         "2021-05-29T00:00:00.000Z"
      ]
   },
   fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
         shade: "dark",
         opacityFrom: 0.7,
         opacityTo: 0.3
      }
   }
};

const series1 = [{ name: "series1", data: [0, 4, 10, 28, 51, 18, 180] }];
const series2 = [{ name: "series2", data: [50, 60, 50, 30, 60, 20, 40] }];

export default function Income() {
   return (
      <>
         <Header>
            <title>Graficos</title>
         </Header>

         <Flex direction="column" h="100vh">
            <HeaderComponent />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
               <Sidebar />

               <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                  <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
                     <Text fontSize="lg" mb="4">
                        Rendimentos da semana
                     </Text>
                     <Chart type="area" height={160} options={options} series={series1} />
                  </Box>

                  <Box p={["6", "8"]} bg="gray.800" borderRadius={8} mb={{
                     base: "4",
                     lg: 0
                  }}>
                     <Text fontSize="lg" mb="4">
                        Taxa de rendimento
                     </Text>
                     <Chart type="area" height={160} options={options} series={series2} />
                  </Box>
               </SimpleGrid>
            </Flex>
         </Flex>
      </>
   );
}
