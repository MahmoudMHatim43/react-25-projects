import { createContext, useEffect, useState } from "react";
import dataServiceCall from "./Data";
export const FeatureFlagContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [flags, setFlags] = useState({});
  const [errMsg, setErrMsg] = useState(null);
  useEffect(() => {
    getFalgs();
  }, []);
  async function getFalgs() {
    try {
      setLoading(true);
      const respond = await dataServiceCall();
      setFlags(respond);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErrMsg(error.message);
      setLoading(false);
    }
  }
  return (
    <FeatureFlagContext.Provider value={{ loading, flags, errMsg }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
export default FeatureFlagGlobalState;
