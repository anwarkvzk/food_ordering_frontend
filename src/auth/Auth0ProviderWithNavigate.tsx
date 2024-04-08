import { Auth0Provider, User } from "@auth0/auth0-react";
import AppState from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};
const onRedirectCallback = (appState?: AppState, user?: User) => {
  console.log("USER", user);
};
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to Initialise auth");
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
