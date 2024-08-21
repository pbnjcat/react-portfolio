import { Text, Title, Box, Container } from '@mantine/core';

export default function LoginPage() {
  return (
    <div >
      <Container component="section" >
        <Title order={2}>Hello please sign in.</Title>
        <Text c="dimmed">
          Easy-to-use technology, spend limits, approval flows, vendor
          payments, and more
        </Text>
      </Container>
    </div>
  );
}
