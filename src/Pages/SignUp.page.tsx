import { Text, Title, Box, Container } from '@mantine/core';

export default function SignUpPage() {
  return (
    <>
      <Box component="section">
        <Title order={1}>Sign Up</Title>
        <Text c="black" style={{ textAlign: "center" }}>
          Sign up Here
        </Text>
      </Box>
    </>
  );
}
