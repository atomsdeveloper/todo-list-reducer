import styles from "./styles.module.css";

import { ContentCenter } from "../ContentCenter";
import { Heading } from "../Heading";
import { Picture } from "../Picture";

type StepsTypes = {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  buttonSkip?: string;
  buttonBack?: string;
  buttonNext?: string;
};

export function Steps({
  title = "Manage your tasks",
  description = "You can easily manage all of your daily tasks in DoMe for free",
  image = "/images/task.png",
  alt = "Manage your tasks",
  buttonSkip = "welcome",
  buttonBack = "",
  buttonNext = "",
}: StepsTypes) {
  return (
    <ContentCenter>
      <main className={styles.container}>
        <div>Button Skip {buttonSkip}</div>

        <section className={""}>
          <Picture src={image} alt={alt} width={200} height={200} />
          <Heading size="md">{title}</Heading>
          <p>{description}</p>
        </section>

        <div>
          <p>
            Button Back {buttonBack} and Next {buttonNext}
          </p>
        </div>
      </main>
    </ContentCenter>
  );
}
