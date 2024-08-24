import { Container, Text, Title, UnstyledButton, createTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ display: " flex" }}>
      <Container component="section" size={1000} style={{ display: " flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "3rem", marginTop: "4rem" }}>
        <Title order={1} size={'38px'} style={{ textAlign: "center", fontWeight: "900" }}>Oops!</Title>
        <Text size={'18px'} c="dimmed" style={{ padding: "1rem", lineHeight: "1.3", textAlign: "center" }}>
          The page you are trying to open does not exist.
          The address may be incorrect, or the page has been moved to another URL.
        </Text>
        <Link to={'/'}>
          <UnstyledButton>Take me back to the home page</UnstyledButton>
        </Link>
      </Container>
    </div>
  );
}
