import styles from "./styles.module.css";

import { Heading } from "../../components/Heading";
import { Picture } from "../../components/Picture";
import { ContentCenter } from "../../components/ContentCenter";
import { Button } from "../../components/Button";

type StepsTypes = {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  buttonBack?: string;
  buttonNext?: string;
};

export function Steps({
  title = "Manage your tasks",
  description = "You can easily manage all of your daily tasks in DoMe for free",
  image = "/images/manage-task.png",
  alt = "Manage your tasks",
  buttonBack = "",
  buttonNext = "",
}: StepsTypes) {
  return (
    <ContentCenter>
      <div className={styles.container}>
        <Button text="skip" />

        <section className={styles.content}>
          <Picture src={image} alt={alt} width={210} height={270} />
          <Heading size="md">{title}</Heading>
          <p>{description}</p>
        </section>

        <div>
          <p>
            Button Back {buttonBack} and Next {buttonNext}
          </p>
        </div>
      </div>
    </ContentCenter>
  );
}
