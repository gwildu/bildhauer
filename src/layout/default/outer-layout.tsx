import { FC } from "react";
import { MainNavigation } from "../../navigation/main-navigation";
import gridClasses from "../../packages/grid/grid.module.css";
import innerLayoutClasses from "../../layout/default/inner-layout/inner-layout.module.css";
import { HeaderLogo } from "../../logo/logo";
import { Footer } from "../../footer/footer";
import footerClasses from "../../footer/footer.module.css";

export const OuterLayout: FC = ({ children: pageContent }) => {
  return (
    <>
      <div>
        <header className={gridClasses.container}>
          <HeaderLogo />
          <MainNavigation />
        </header>
        {pageContent}
        <footer className={gridClasses.container}>
          <div
            className={`${innerLayoutClasses.content} ${footerClasses.footer}`}
          >
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};
