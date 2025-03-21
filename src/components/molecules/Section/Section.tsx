import React from "react";
import styles from "./Section.module.scss";
import { EVariant } from "../../../types/enums";

interface SectionProps {
  variant: EVariant;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ variant, content }) => {
  return (
    <div
      className={`${styles.section} ${
        variant === EVariant.Variant1 ? styles.variant1 : styles.variant2
      }`}
    >
      {content}
    </div>
  );
};

export default Section;
