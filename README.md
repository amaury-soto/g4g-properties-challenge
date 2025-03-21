# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# SectionBuilder Component

The `SectionBuilder` component is a versatile React component designed to create various sections of a web application. It supports different types of content, such as headers, footers, and content sections, along with customizable badges and card items.

## Table of Contents

- [Usage](#usage)
- [Props](#props)
- [Factory Pattern in SectionBuilder](#FactoryPatterninSectionBuilder)

## Usage

Import the `SectionBuilder` component into your React application and use it within your render method or functional component:

```javascript
import SectionBuilder from "./components/organisms/SectionBuilder/SectionBuilder";
import { EBadgeIcon, ETypes, EVariant } from "./types/enums";

function App() {
  return (
    <div>
      <SectionBuilder
        variant={EVariant.Variant2}
        type={ETypes.Header}
        title="Welcome to the Header"
        subtitle="Explore our site"
      />
      <br />
      <SectionBuilder
        variant={EVariant.Variant1}
        type={ETypes.Content}
        badgeIcon={EBadgeIcon.Agata}
        badgeText="Agata Studio"
        badgeSubtitle="It's time to leave a mark in history"
        title="Elevate Your Brand"
        subtitle="Discover how we turn ideas into exceptional digital products."
        cardItems={[
          {
            mediaSrc: "nissan.jpg",
            isVideo: false,
            title: "Nissan",
            subtitle:
              "Nissan leverages customer insights to enhance experience.",
          },
          {
            isVideo: true,
            thumbnailSrc: collabsImg,
            mediaSrc: "./video.mp4",
            title: "Rewind: Digital Innovations in Action",
            subtitle:
              "Relive the milestones of our digital projects in this recap video celebrating our innovative solutions.",
          },
        ]}
      />
      <br />
      <SectionBuilder
        variant={EVariant.Variant2}
        type={ETypes.Footer}
        subtitle="Footer - Contact us for more information"
      />
    </div>
  );
}

export default App;
```

## Props

| Prop            | Type                    | Description                                                          |
| --------------- | ----------------------- | -------------------------------------------------------------------- |
| `variant`       | `EVariant`              | Determines the styling variant for the section (Variant1, Variant2). |
| `type`          | `ETypes`                | Defines the type of section (Header, Content, Footer).               |
| `title`         | `string` (optional)     | Title text for the section header.                                   |
| `subtitle`      | `string`                | Subtitle text displayed below the title.                             |
| `badgeIcon`     | `EBadgeIcon` (optional) | The icon to display in the badge.                                    |
| `badgeText`     | `string` (optional)     | Text to show in the badge.                                           |
| `badgeSubtitle` | `string` (optional)     | Subtitle text for the badge (only shown in Variant1).                |
| `cardItems`     | `CardItem[]` (optional) | Array of card items to display in the content section.               |

## Factory Pattern in SectionBuilder

The `SectionBuilder` component employs the Factory Pattern to effectively manage the creation of different section types and their variants within the application. This pattern allows for a clean separation of concerns and enhances the maintainability of the codebase.

### Key Concepts

1. **Types and Variants**:
   - **Types**: The `type` prop determines the kind of section to render. The possible values include `ETypes.Header`, `ETypes.Content`, and `ETypes.Footer`. Each type corresponds to a specific section that has its own structure and presentation.
   - **Variants**: The `variant` prop further customizes the appearance of the section. Variants could dictate different styles or layouts, such as `EVariant.Variant1` and `EVariant.Variant2`.

### Purpose of Using the Factory Pattern

1. **Encapsulation of Object Creation**: The Factory Pattern encapsulates the logic of creating different types of sections based on the provided props. This allows the `SectionBuilder` to remain agnostic about the specific details of each section type or variant.

2. **Simplified Code Management**: By centralizing the creation logic, the code remains organized. If a new type or variant needs to be added in the future, it can be done in one place without modifying the `SectionBuilder` logic.

3. **Loose Coupling**: The `SectionBuilder` does not directly instantiate the section components. Instead, it relies on a factory method, promoting loose coupling and making the code more adaptable to changes.

### Implementation Overview

In the `SectionBuilder`, the factory function is responsible for determining which section to render based on the `type` and `variant` props. Here’s how this might be structured:
