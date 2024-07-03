import { Card, Image, Text, Badge, Button, Group, Container, SimpleGrid, Title, Grid } from '@mantine/core';

import image1 from '../../assets/wall1.jpg';
import image2 from '../../assets/wall2.jpeg';
import image3 from '../../assets/wall3.jpg';

import classes from './Card.module.scss';

interface DataItem {
    title: string;
    description: string;
    alt: string,
    image: string;
}

const mockdata: DataItem[] = [
    {
        title: "Sample Title 1",
        description: "This is a description for the first item.",
        alt: "Image-2",
        image: image1
    },
    {
        title: "Sample Title 2",
        description: "This is a description for the second item.",
        alt: "Image-1",
        image: image2
    },
    {
        title: "Sample Title 3",
        description: "This is a description for the third item.",
        alt: "Image-3",
        image: image3
    }
];

export default function CardsComponent() {

    const cards = mockdata.map((item, index) => (
        <SimpleGrid cols={3} spacing={60} className={classes.grid} key={index}>
            <Card shadow="sm" padding="lg" radius="lg" withBorder h={'100%'} >
                <Card.Section>
                    <Image
                        fit='cover'
                        src={item.image}
                        height={200}
                        alt={item.alt}
                    />
                </Card.Section>
                <Group justify="space-between" mt="lg" mb="lg">
                    <Text fw={500}>{item.title}</Text>
                    <Badge color="yellow">Alert</Badge>
                </Group>
                <Text>
                    {item.description}
                </Text>
            </Card>
        </SimpleGrid>
    ))
    return (
        <section className={classes.wrapper}>
            {cards}
        </section>
    )
}