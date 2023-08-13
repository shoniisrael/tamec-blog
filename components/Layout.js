import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}) => {
  return (
    <div className="text-slate-700">
      <Header navigation={navigation} settings={settings} className="h-16" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
