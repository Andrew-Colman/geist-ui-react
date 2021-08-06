import { Page, Text, Button } from "@geist-ui/react";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <Page>
      <Text h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Text>
      <Button>hello</Button>
      <Feature />
    </Page>
  );
}
