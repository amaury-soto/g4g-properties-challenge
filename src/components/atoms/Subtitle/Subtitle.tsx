import React from "react";
import styles from "./Subtitle.module.scss";
import { EVariant } from "../../../types/enums";

interface SubtitleProps {
  subtitle: string;
  variant?: EVariant;
  as?: "p" | "span";
  fontSize?: string;
  uppercase?: boolean;
}

const Subtitle: React.FC<SubtitleProps> = ({
  subtitle,
  variant,
  as = "p",
  fontSize,
  uppercase = false,
}) => {
  const Tag = as;
  const baseClass = styles.subtitle;

  const variantClass = variant ? styles[`subtitle--${variant}`] : "";

  const additionalClasses = [
    uppercase ? styles.uppercase : "",
    fontSize ? styles.customFontSize : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={`${baseClass} ${variantClass} ${additionalClasses}`}
      style={fontSize ? { fontSize } : {}}
    >
      {subtitle}
    </Tag>
  );
};

export default Subtitle;
