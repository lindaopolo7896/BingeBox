import { useQuery } from "@tanstack/react-query";
import React from "react";

function useFetch(key, fn) {
  return useQuery({
    queryKey: key,
    queryFn: fn,
  });
}

export default useFetch;
