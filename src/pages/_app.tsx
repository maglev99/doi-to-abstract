import { type AppProps } from "next/app";
import { api } from "~/utils/api";
import { MantineProvider } from "@mantine/core";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
