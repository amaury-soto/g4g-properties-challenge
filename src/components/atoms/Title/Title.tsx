import React from "react";
import styles from "./Title.module.scss";
import { EVariant } from "../../../types/enums";

interface TitleProps {
  title: string;
  variant?: EVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  variant,
  as = "h1",
  fontSize,
}) => {
  const Tag = as;
  const variantClass = variant ? styles[`title--${variant}`] : "";

  return (
    <Tag
      className={`${styles.title} ${variantClass}`}
      style={fontSize ? { fontSize } : {}}
    >
      {title}
    </Tag>
  );
};

export default Title;
