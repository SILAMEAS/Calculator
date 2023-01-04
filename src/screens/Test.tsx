import {
  faBatteryHalf,
  faSignal,
  faWifiStrong,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button, Center, HStack, Stack, Switch, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const Test = () => {
  const [num, setNum] = React.useState(0);
  const [Opt, SetOpt] = React.useState('');

  const he = [
    'AC',
    '+_',
    '%',
    '/',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];
  const Press = (i: any) => {
    setNum(num + i);
    if (i == 'AC') {
      setNum(0);
    }
  };
  return (
    <>
      <Stack style={sytle.container}>
        <HStack justifyContent={'space-between'} h="25%" px={5}>
          <VStack>
            <Text color={'white'}>11:24am</Text>
            <Switch size={'sm'} alignSelf="flex-start" />
          </VStack>
          <HStack space={2}>
            <FontAwesomeIcon icon={faWifiStrong} color="white" />

            <FontAwesomeIcon icon={faSignal} color="white" />
            <FontAwesomeIcon icon={faBatteryHalf} color="white" />
          </HStack>
        </HStack>
        <Stack
          h="5%"
          width={'100%'}
          justifyContent="center"
          alignItems={'flex-end'}
        >
          <Text fontSize={'3xl'} fontWeight="bold" mr={3}>
            {num}
          </Text>
        </Stack>
        <Stack
          h={'70%'}
          bg="#0004"
          direction={['row', 'row']}
          w="100%"
          flexWrap={'wrap'}
        >
          {he.map((i: any) =>
            i == 0 ? (
              <Button
                p={2}
                borderColor="#0005"
                borderWidth={1}
                bg="#0006"
                h="1/5"
                w="1/2"
                justifyContent={'center'}
                alignContent="center"
                flexWrap={'wrap'}
                key={i}
              >
                <Center w="100%">
                  <Text
                    fontWeight={'bold'}
                    fontSize="2xl"
                    textAlign={'center'}
                    onPress={() => {
                      Press(i);
                    }}
                  >
                    {i}
                  </Text>
                </Center>
              </Button>
            ) : i === 'AC' ? (
              <Button
                alignContent={'center'}
                p={2}
                borderColor="#0005"
                borderWidth={1}
                bg="#0006"
                h="1/5"
                w="1/4"
                justifyContent={'center'}
                alignItems="center"
                flexWrap={'wrap'}
                key={i}
                onPress={() => {
                  Press(i);
                }}
              >
                <Center width={'100%'}>
                  <Text
                    fontWeight={'bold'}
                    fontSize="2xl"
                    onPress={() => {
                      Press(i);
                    }}
                  >
                    {i}
                  </Text>
                </Center>
              </Button>
            ) : (
              <Button
                alignContent={'center'}
                p={2}
                borderColor="#0005"
                borderWidth={1}
                bg="#0001"
                h="1/5"
                w="1/4"
                justifyContent={'center'}
                alignItems="center"
                flexWrap={'wrap'}
                key={i}
                onPress={() => {
                  Press(i);
                }}
              >
                <Center width={'100%'}>
                  <Text
                    fontWeight={'bold'}
                    fontSize="2xl"
                    onPress={() => {
                      Press(i);
                    }}
                  >
                    {i}
                  </Text>
                </Center>
              </Button>
            ),
          )}
        </Stack>
      </Stack>

      {/* <Stack direction={['row', 'row']} w="100%" flexWrap={'wrap'} h="50%">
        <Box bg={'green.400'} w={['1/4', '1/4', '1/4']} h="1/4">
          <Text>Hello</Text>
        </Box>
        <Box bg={'red.400'} w={['1/4', '1/4', '1/4']} h="1/4">
          <Text>Hello</Text>
        </Box>
        <Box bg={'blue.400'} w={['1/4', '1/4', '1/4']} h="1/4">
          <Text>Hello</Text>
        </Box>
        <Box bg={'green.400'} w={['1/4', '1/4', '1/4']} h="1/4">
          <Text>Hello</Text>
        </Box>
        <Box bg={'red.400'} w={['1/4', '1/4', '1/4']} h="1/4">
          <Text>Hello</Text>
        </Box>
        <Box bg={'blue.400'} w={['1/4', '1/4', '1/4']} h="1/4">
          <Text>Hello</Text>
        </Box>
      </Stack> */}
    </>
  );
};

const sytle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,

    height: '100%',
    backgroundColor: '#996600',
    width: '100%',
  },
});

export default Test;
