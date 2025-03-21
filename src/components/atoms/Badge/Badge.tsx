import React from "react";
import styles from "./Bagde.module.scss";
import agataLogo from "../../../assets/agata-logo.svg";
import carraciLogo from "../../../assets/carraci-logo.svg";
import { EBadgeIcon, EVariant } from "../../../types/enums";

interface BadgeProps {
  text: string;
  badgeIcon?: EBadgeIcon;
  variant?: EVariant;
}

const iconMap: Record<EBadgeIcon, string> = {
  [EBadgeIcon.Agata]: agataLogo,
  [EBadgeIcon.Carraci]: carraciLogo,
};

const Badge: React.FC<BadgeProps> = ({
  badgeIcon,
  text,
  variant = EVariant.Variant1,
}) => {
  const iconSrc = badgeIcon ? iconMap[badgeIcon] : null;

  return (
    <span className={`${styles.badge} ${styles[`badge--${variant}`]}`}>
      {iconSrc && (
        <span className={`${styles.badge__icon}`}>
          <img
            src={iconSrc}
            alt={`${badgeIcon}-logo`}
            className={styles.badge__iconImg}
          />
        </span>
      )}
      <span className={styles.badge__text}>{text}</span>
    </span>
  );
};

export default Badge;
