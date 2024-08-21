import { Card, Image, Text, Badge, Group } from "@mantine/core";

import image1 from "../../assets/images/wall1.jpg";
import image2 from "../../assets/images/wall2.jpeg";
import image3 from "../../assets/images/wall3.jpg";

import classes from "./Card.module.scss";

interface DataItem {
  title: string;
  description: string;
  alt: string;
  image: string;
}

const mockdata: DataItem[] = [
  {
    title: "Sample Title 1",
    description: "This is a description for the first item.",
    alt: "Image-2",
    image: image1,
  },
  {
    title: "Sample Title 2",
    description: "This is a description for the second item.",
    alt: "Image-1",
    image: image2,
  },
  {
    title: "Sample Title 3",
    description: "This is a description for the third item.",
    alt: "Image-3",
    image: image3,
  },
];

export default function CardsComponent() {
  const card = mockdata.map((item, index) => (
    <Card key={index}>
      <Card.Section>
        <Image fit="cover" src={item.image} height={200} alt={item.alt} />
      </Card.Section>
      <Group justify="space-between" mt="lg" mb="lg">
        <Text fw={500}>{item.title}</Text>
        <Badge color="yellow">Alert</Badge>
      </Group>
      <Text>{item.description}</Text>
    </Card>
  ));

  return (
    <div className={classes.grid}>{card}</div>
  );
}
