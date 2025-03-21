import React from "react";
import styles from "./Subtitle.module.scss";
import { EVariant } from "../../../types/enums";

interface SubtitleProps {
  subtitle: string;
  variant?: EVariant;
  as?: "p" | "span" | "div";
}

const Subtitle: React.FC<SubtitleProps> = ({
  subtitle,
  variant = EVariant.Variant1,
  as = "p",
}) => {
  const Tag = as;

  return (
    <Tag className={`${styles.subtitle} ${styles[variant]}`}>{subtitle}</Tag>
  );
};

export default Subtitle;
