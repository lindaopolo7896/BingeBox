import { useQuery } from "@tanstack/react-query";
import React from "react";

function useFetchById(id, key, fn) {
  return useQuery({
    queryKey: key,
    queryFn: () => fn(id),
    enabled: !!id,
  });
}

export default useFetchById;
