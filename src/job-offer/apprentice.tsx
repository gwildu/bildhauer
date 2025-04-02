import { Paragraph } from "../packages/typography/paragraph";
import { Heading } from "../packages/typography/heading";
import {
  CheckboxListItem,
  CheckmarkListItem,
  DiamondListItem,
  TextListUnordered,
} from "../packages/list/textList";
import { Text } from "../packages/typography/text";
import { FC } from "react";

export const Apprentice: FC = () => {
  return (
    <>
      <Heading markupLevel={"h1"} stylingLevel={"MAIN_HEADING"}>
        <strong>Lehrstelle als Steinmetz/in</strong> – Fachrichtung Bildhauerei
        2026
      </Heading>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Gestalte deine Zukunft – Baue auf ein solides Fundament!
      </Heading>
      <Paragraph>
        Unser familiengeführter Betrieb verbindet Tradition mit Innovation. Wir
        pflegen das klassische Handwerk, sind aber ebenso offen für neue
        Entwicklungen.
      </Paragraph>
      <Paragraph>
        Mit meiner langjährigen Erfahrung in der Berufsbildung und als
        Berufsschullehrer biete ich eine fundierte und praxisnahe Lehrzeit.
      </Paragraph>
      <Paragraph>
        Unser Team ist vor allem in der Grabmalherstellung tätig, ergänzt durch
        kleinere Restaurierungsaufgaben.
      </Paragraph>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Was dich bei uns erwartet:
      </Heading>
      <TextListUnordered>
        <CheckmarkListItem>
          <Text noMargin>
            <strong>Eine solide handwerkliche Ausbildung</strong>, in einem
            modernen Betrieb
          </Text>
        </CheckmarkListItem>
        <CheckmarkListItem>
          <Text noMargin>
            <strong>Ein erfahrenes und engagiertes Team</strong>, welches Wissen
            und Fertigkeiten weitergibt
          </Text>
        </CheckmarkListItem>
        <CheckmarkListItem>
          <Text noMargin>
            <strong>Vielfältige Tätigkeiten</strong> – von traditioneller
            Steinbearbeitung bis zu kreativer Gestaltung
          </Text>
        </CheckmarkListItem>
        <CheckmarkListItem>
          <Text noMargin>
            <strong>Ein wertschätzendes Arbeitsumfeld</strong>, in dem Teamgeist
            und persönliche Entwicklung gefördert werden
          </Text>
        </CheckmarkListItem>
      </TextListUnordered>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Dein Profil:
      </Heading>
      <TextListUnordered>
        <DiamondListItem>
          <Text noMargin>
            Handwerkliches Geschick und Interesse an der Steinbearbeitung
          </Text>
        </DiamondListItem>
        <DiamondListItem>
          <Text noMargin>Kreativität und Freude am Gestalten</Text>
        </DiamondListItem>
        <DiamondListItem>
          <Text noMargin>Zuverlässigkeit, Motivation und Teamfähigkeit</Text>
        </DiamondListItem>
      </TextListUnordered>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Das bieten wir:
      </Heading>
      <TextListUnordered>
        <CheckboxListItem>
          <Text noMargin>
            Eine qualifizierte Ausbildung mit individueller Betreuung
          </Text>
        </CheckboxListItem>
        <CheckboxListItem>
          <Text noMargin>
            Arbeit mit hochwertigen Materialien und modernen Werkzeugen in gut
            ausgerüsteter Werkstatt
          </Text>
        </CheckboxListItem>
        <CheckboxListItem>
          <Text noMargin>
            Langfristige berufliche Perspektiven in einem zukunftssicheren
            Handwerk
          </Text>
        </CheckboxListItem>
        <CheckboxListItem>
          <Text noMargin>
            Ein angenehmes Arbeitsumfeld in einem kollegialen Team
          </Text>
        </CheckboxListItem>
      </TextListUnordered>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Interessiert?
      </Heading>
      <Paragraph>
        Ich, <strong>Andreas Rickenbacher</strong>, freue mich auf deine
        Kontaktaufnahme und erkläre dir gerne die weiteren Schritte im
        Bewerbungsprozess.
      </Paragraph>
      <Paragraph>
        📞&nbsp;&nbsp;Kontakt: 071 951 88 88
        <br />
        📧&nbsp;&nbsp;E-Mail: info@bildhauer-stein.ch
        <br />
        📍&nbsp;&nbsp;Adresse:
      </Paragraph>
      <Paragraph>
        Bildhauerei & Restaurationen Rickenbacher
        <br />
        Andreas Rickenbacher
        <br />
        Wilerstrasse 51
        <br />
        9536 Schwarzenbach
      </Paragraph>
    </>
  );
};
