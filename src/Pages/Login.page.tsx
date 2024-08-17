import { Text, Title, Box, Container } from '@mantine/core';

export default function LoginPage() {
  return (
    <>
      <Box component="section">
        <Title order={1}>Sign In</Title>
        <Text c="black" style={{ textAlign: "center" }}>
          Sign in Here
        </Text>
      </Box>
    </>
  );
}
