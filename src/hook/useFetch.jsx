import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { session } = useSession();

  console.log(session);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });
      console.log(supabaseAccessToken);
      console.log("token", supabaseAccessToken);
      const response = await cb(supabaseAccessToken, options, ...args);
      console.log(response);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { fn, data, loading, error };
};

export default useFetch;
