import { withLDConsumer } from "launchdarkly-react-client-sdk";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

// Pass the flags prop and return an element based on the state of the feature flag key
const FeatureTest = ({ flags }) => {
  console.log(flags);

  return flags.testFlag ? (
    <>
      Feature flag in PROD environment: <CheckCircleIcon color="success" />
    </>
  ) : (
    <>
      Feature flag in PROD environment: <ErrorIcon color="error" />
    </>
  );
};

export default withLDConsumer()(FeatureTest);
