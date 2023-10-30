import { Heading, Text, Center, Image, Box, ScrollView} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
    <ScrollView>
        <Header title={"News"} withBack={true} flex={1} />
        <Image width="auto" height={200} source={{ uri: params.image }} style={{marginBottom: 10}}/>
        <Text textAlign= "left" style={{marginBottom: 10}} paddingHorizontal={10}>{params.date}</Text>
        <Heading textAlign="left" style={{marginBottom: 10}} paddingHorizontal={10}> {params.title}</Heading>
        <Text paddingHorizontal={10}>{params.content}</Text>
    </ScrollView>
    </>
  );
};

export default NewsDetail;
