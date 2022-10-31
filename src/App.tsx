import "./styles.css";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import FeatureTest from "./feature-test";
import { Typography, Grid } from "@mui/material";

export function App() {
  return (
    <div className="App">
      <Typography variant="h3" component="h1">
        Feature flag POC
      </Typography>
      <Typography variant="h4" component="h2">
        Using launch darkly
      </Typography>
      <Grid container spacing={6} mt={4}>
        <Grid item xs={12}>
          <FeatureTest />
        </Grid>
      </Grid>
    </div>
  );
}

export default withLDProvider({
  clientSideID: "635fd5a6d3a48d0c2c94b297",
  user: {
    key: "example_user",
    name: "Example user",
    email: "User@example.com"
  }
})(App);
