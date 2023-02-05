import { useState, useEffect } from "react";

export default async function useFetch() {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
}
