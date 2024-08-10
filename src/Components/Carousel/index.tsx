import { Text, Container, useMantineTheme, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel'
import classes from './Carousel.module.scss';

export default function BrandCarousel() {
    return (
        <section className={classes.carousel_wrapper}>
            <Text>
                <Title order={1}></Title>
            </Text>
        </section>
    )
}