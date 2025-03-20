import { DefaultInnerLayout } from "../layout/default/inner-layout/inner-layout";
import { PageHead } from "../packages/seo/page-head";
import { Heading } from "../packages/typography/heading";
import { Paragraph } from "../packages/typography/paragraph";

export const Index = () => {
  return (
    <>
      <DefaultInnerLayout pageHead={pageHead}>
        <Heading markupLevel={"h1"} stylingLevel={"MAIN_HEADING"}>
          <strong>Bildhauerei & Restaurationen Rickenbacher</strong>
        </Heading>
        <Heading markupLevel={"h2"} stylingLevel={"SUB_HEADING_1"}>
          Herzlich willkommen auf unsere Webseite
        </Heading>
        <Paragraph>
          Wir führen Arbeiten in der Bildhauerei und Restaurationen aus. Neben
          den Schwerpunkten Grabmale und Steinrestaurierungen führen wir auch
          Arbeiten im Bereich Steinmetzarbeiten und Gartenbau aus.
        </Paragraph>
        <Paragraph>
          Wenn es um Stein geht sind Sie bei uns richtig. Wir legen Wert auf
          eine individuelle Beratung und suchen zusammen mit Ihnen die Lösung
          die für Sie passt.
        </Paragraph>
        <Paragraph>
          Als innovatives Unternehmen und dank Weiterbildungen sind wir bestrebt
          Ihnen den optimalen Service zu bieten. Dank vielen Regionalen Partnern
          und unserem Netzwerk können wir auch in kurzer Zeit Projekte
          verwirklichen.
        </Paragraph>
      </DefaultInnerLayout>
    </>
  );
};

const pageHead = <PageHead title={"Bildhauerei-Rickenbacher - Startseite"} />;
