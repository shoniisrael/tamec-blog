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
      <Header navigation={navigation} settings={settings} />
      <main className="mt-16">{children}</main>
      <Footer />
    </div>
  );
};
