import { Container } from "../../components/Container";

type MainTemplatesTypes = {
  children: React.ReactNode;
};

export function MainTemplates({ children }: MainTemplatesTypes) {
  return <Container>{children}</Container>;
}
