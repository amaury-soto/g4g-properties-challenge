import "./App.scss";
import SectionBuilder from "./components/organisms/SectionBuilder/SectionBuilder";
import nissanImg from "../src/assets/nissan.jpg";
import macImg from "../src/assets/mcdonald.jpg";
import collabsImg from "../src/assets/collabs.png.jpg";
import { EBadgeIcon, ETypes, EVariant } from "./types/enums";

function App() {
  return (
    <div>
      <SectionBuilder
        variant={EVariant.Variant2}
        type={ETypes.Header}
        title="Bienvenido a un Header"
        subtitle="Explora nuestro sitio"
      />
      <br />
      <SectionBuilder
        variant={EVariant.Variant1}
        type={ETypes.Content}
        badgeIcon={EBadgeIcon.Agata}
        badgeText="Estudio Ágata"
        badgeSubtitle="ES hora de que dejes una HUELLA EN LA historia"
        title="Eleva tu marca"
        subtitle="Descubre cómo convertimos ideas en productos digitales excepcionales, transformando desafíos en oportunidades a través de soluciones innovadoras en nuestros casos de estudio."
        cardItems={[
          {
            mediaSrc: nissanImg,
            isVideo: false,
            title: "Nissan",
            subtitle:
              "Nissan leverages customer 360 and data insights to enhance customer experience.",
          },
          {
            mediaSrc: macImg,
            isVideo: false,
            title: "McDonald's",
            subtitle:
              "How McDonald's revamped its loyalty program and boosted customer engagement with MySneakers limited edition release.",
          },
        ]}
      />
      <br />
      <SectionBuilder
        variant={EVariant.Variant2}
        type={ETypes.Content}
        badgeIcon={EBadgeIcon.Carraci}
        badgeText="Estudio Carraci"
        title="Casos de estudio"
        subtitle="Descubre cómo convertimos ideas en productos digitales excepcionales, transformando desafíos en oportunidades a través de soluciones innovadoras en nuestros casos de estudio."
        cardItems={[
          {
            isVideo: true,
            thumbnailSrc: collabsImg,
            mediaSrc: "./video.mp4",
            title: "Rewind: Digital Innovations in Action",
            subtitle:
              "Relive the milestones of our digital projects in this recap video celebrating our innovative solutions.",
          },
          {
            mediaSrc: macImg,
            isVideo: false,
            title: "McDonald's",
            subtitle:
              "How McDonald's revamped its loyalty program and boosted customer engagement with MySneakers limited edition release.",
          },
        ]}
      />
      <br />
      <SectionBuilder
        variant={EVariant.Variant1}
        type={ETypes.Footer}
        subtitle="Footer - Contáctanos para más información"
      />
    </div>
  );
}

export default App;
