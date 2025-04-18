import styles from "./styles.module.css";

import { Heading } from "../Heading";
import { Picture } from "../Picture";
import { ContentCenter } from "../ContentCenter";

import { StepsModel } from "../../models/StepsModel";

export function StepItem({ title, description, image, alt }: StepsModel) {
  return (
    <ContentCenter>
      <section className={styles.section}>
        <Picture src={image} alt={alt} width={210} height={270} />
        <Heading size="md">{title}</Heading>
        <p>{description}</p>
      </section>
    </ContentCenter>
  );
}
