import { IImage } from "../packages/types";
import { FC } from "react";
import { Heading } from "../packages/typography/heading";
import { Paragraph } from "../packages/typography/paragraph";
import { ILink, Link } from "../link/link";

export interface ITeaserBaseProps {
  title: string;
  link: ILink;
}

export interface ITextTeaaser extends ITeaserBaseProps {
  text: string;
}

export interface IImageTeaser extends ITeaserBaseProps {
  image: IImage;
}

export const isTextTeaser = (props: ITeaser): props is ITextTeaaser => {
  return (props as ITextTeaaser).text !== undefined;
};

export type ITeaser = ITextTeaaser | IImageTeaser;

export const Teaser: FC<ITeaser> = (props) => {
  if (isTextTeaser(props)) {
    return <TextTeaser {...(props as ITextTeaaser)} />;
  } else {
    return <ImageTeaser {...(props as IImageTeaser)} />;
  }
};

export const TextTeaser: FC<ITextTeaaser> = ({ title, text, link }) => {
  return (
    <div>
      <Heading markupLevel={"h2"} stylingLevel={"MAIN_HEADING"}>
        <strong>Steinbildhauer/in 60-100%</strong> in der Grabmal Herstellung
      </Heading>
      <Paragraph>{text}</Paragraph>
      <Link {...link} />
    </div>
  );
};
export const ImageTeaser: FC<IImageTeaser> = ({
  title,
  image: { src, alt },
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={src} alt={alt} />
    </div>
  );
};
