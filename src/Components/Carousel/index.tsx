import { Text, Container, useMantineTheme, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import classes from './Carousel.module.scss';

export default function CarouselComponent() {
    return (
        <Container className={classes.carousel_wrapper}>
            <Text>
                <Title order={1}></Title>
            </Text>
        </Container>
    )
}