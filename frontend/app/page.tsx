'use client';
import { ArrowRightIcon } from "@phosphor-icons/react";
import Container from "./components/layout/Container";
import Section from "./components/layout/Section";
import { Button } from "./components/ui/Button/Button";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          {/* Hero Content */}
          <Button variant={'outline'} interactiveFill={true} iconPosition="right" icon={<ArrowRightIcon weight="bold" />}>Continue</Button>
        </Container>
      </Section>
    </main>
  );
}
