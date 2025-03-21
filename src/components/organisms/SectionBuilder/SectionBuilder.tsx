import React from "react";
import Section from "../../molecules/Section/Section";
import Badge from "../../atoms/Badge/Badge";
import Title from "../../atoms/Title/Title";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Card from "../../molecules/Card/Card";
import styles from "./SectionBuilder.module.scss";
import { EBadgeIcon, ETypes, EVariant } from "../../../types/enums";

interface CardItem {
  mediaSrc: string;
  thumbnailSrc?: string;
  isVideo?: boolean;
  title: string;
  subtitle: string;
}

interface SectionBuilderProps {
  variant: EVariant;
  type: ETypes;
  title?: string;
  subtitle: string;
  badgeIcon?: EBadgeIcon;
  badgeText?: string;
  badgeSubtitle?: string;
  cardItems?: CardItem[];
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({
  variant,
  type,
  title,
  subtitle,
  badgeText,
  badgeSubtitle,
  cardItems = [],
  badgeIcon,
}) => {
  const getContent = () => {
    switch (type) {
      case ETypes.Header:
        return (
          <div className={styles.headerContainer}>
            <Title title={title!} variant={variant} />
            <Subtitle subtitle={subtitle} variant={variant} />
          </div>
        );
      case ETypes.Content:
        return (
          <div className={styles.headerContainer}>
            <div
              className={`${styles.titleBadgeContainer} ${
                variant === EVariant.Variant2 ? styles.variant2 : ""
              }`}
            >
              <div
                className={`${styles.badgeContainer} ${
                  variant === EVariant.Variant2 ? styles.variant2 : ""
                }`}
              >
                <Badge
                  badgeIcon={badgeIcon}
                  text={badgeText || ""}
                  variant={variant}
                />
                {variant === EVariant.Variant1 && badgeSubtitle && (
                  <Subtitle subtitle={badgeSubtitle} variant={variant} as="p" />
                )}
              </div>
              <Title title={title!} variant={variant} fontSize="4rem" />
            </div>
            <Subtitle
              subtitle={subtitle}
              variant={variant}
              as="p"
              uppercase={variant === EVariant.Variant1 ? true : false}
            />
            <div className={styles.mediaContainer}>
              {cardItems.map((item, index) => (
                <Card
                  key={index}
                  mediaSrc={item.mediaSrc}
                  thumbnailSrc={item.thumbnailSrc}
                  isVideo={item.isVideo}
                  title={item.title}
                  subtitle={item.subtitle}
                  variant={variant}
                />
              ))}
            </div>
          </div>
        );
      case ETypes.Footer:
        return (
          <div className={styles.headerContainer}>
            <Subtitle subtitle={subtitle} variant={variant} />
          </div>
        );
      default:
        return null;
    }
  };

  return <Section variant={variant} content={getContent()} />;
};

export default SectionBuilder;
