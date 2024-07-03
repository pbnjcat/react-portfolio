import { Container, Text, Title, UnstyledButton, createTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ display: " flex" }}>
      <Container component="section" size={1000} style={{ display: " flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "3rem", marginTop: "4rem" }}>
        <Title order={1} size={'38px'} style={{ textAlign: "center", fontWeight: "900" }}>Nothing to see here</Title>
        <Text size={'18px'} c="dimmed" style={{ padding: "1rem", lineHeight: "1.3", textAlign: "center" }}>
          Page you are trying to open does not exist.
          You may have mistyped the address, or the page has been moved to another URL.
          If you think this is an error contact support.
        </Text>
        <Link to={'/'}>
          <UnstyledButton>Take me back to home page</UnstyledButton>
        </Link>
      </Container>
    </div>
  );
}
