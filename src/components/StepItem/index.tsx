import styles from "./styles.module.css";

import { Heading } from "../Heading";
import { Picture } from "../Picture";
import { ContentCenter } from "../ContentCenter";

type StepsTypes = {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
};

export function StepItem({
  title = "Teste",
  description,
  image,
  alt,
}: StepsTypes) {
  return (
    <ContentCenter>
      <div className={styles.container}>
        <section className={styles.content}>
          <Picture src={image} alt={alt} width={210} height={270} />
          <Heading size="md">{title}</Heading>
          <p>{description}</p>
        </section>
      </div>
    </ContentCenter>
  );
}
