import { Paragraph } from "../packages/typography/paragraph";
import { Heading } from "../packages/typography/heading";
import { TextListUnordered } from "../packages/list/textList";
import { Text } from "../packages/typography/text";
import { FC } from "react";

export const JobOffer: FC = () => {
  return (
    <>
      <Paragraph>
        Zur Verstärkung suchen wir per sofort oder nach Vereinbarung eine/n
      </Paragraph>
      <Heading markupLevel={"h1"} stylingLevel={"MAIN_HEADING"}>
        <strong>Steinbildhauer/in 50-100%</strong> in der Grabmal Herstellung
      </Heading>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Ihre Aufgaben umfassen:
      </Heading>
      <TextListUnordered>
        <li>
          <Text>Ausführung von Grabmalen und Inschriften</Text>
        </li>
        <li>
          <Text>Versetzen von Grabmalen</Text>
        </li>
        <li>
          <Text>Ausführung Zweitinschriften</Text>
        </li>
        <li>
          <Text>Unterhalt von Grabmalen</Text>
        </li>
        <li>
          <Text>Unterstützung Restaurierung</Text>
        </li>
        <li>
          <Text>Vertretung während Abwesenheiten und Betreuung der Kunden</Text>
        </li>
      </TextListUnordered>
      <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
        Profil /&nbsp;Muss-Kriterien:
      </Heading>
      <TextListUnordered>
        <li>
          <Text>Steinbildhauer EFZ</Text>
        </li>
        <li>
          <Text>Selbständiges Arbeiten an vielfältigen Projekten</Text>
        </li>
        <li>
          <Text>Hohe Einsatzbereitschaft, Flexibilität und Belastbarkeit</Text>
        </li>
        <li>
          <Text>Angemessener Kundenumgang</Text>
        </li>
      </TextListUnordered>
      <Paragraph>
        Wir bieten moderne Anstellungsverhältnisse nach GVA, in einem familiären
        Kleinbetrieb mit langfristigem Engagement, in grosser und gut
        eingerichteter Werkstatt.
      </Paragraph>
      <Paragraph>
        <strong>
          Interessiert? Dann senden Sie bitte Ihren Lebenslauf,
          Motivationsschreiben, bisherige Arbeiten oder Arbeitsmappen an:
        </strong>
      </Paragraph>
      <Paragraph>
        Bildhauerei & Restaurationen Rickenbacher
        <br />
        Andreas Rickenbacher
        <br />
        Wilerstrasse 51
        <br />
        9536 Schwarzenbach
        <br />
        071 951 88 88
        <br />
        info@bildhauer-stein.ch
      </Paragraph>
    </>
  );
};
