import React from "react";
import styles from "./Title.module.scss";
import { EVariant } from "../../../types/enums";

interface TitleProps {
  title: string;
  variant?: EVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title: React.FC<TitleProps> = ({
  title,
  variant = EVariant.Variant1,
  as = "h1",
}) => {
  const Tag = as;

  return <Tag className={`${styles.title} ${styles[variant]}`}>{title}</Tag>;
};

export default Title;
