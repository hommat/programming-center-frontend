import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function<T>(fetchUrl: string): [T[], boolean] {
  const mounted = useRef<boolean>(true);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): VoidFunction => () => (mounted.current = false), []);

  useEffect(() => {
    axios
      .get<T[]>(fetchUrl)
      .then(res => {
        if (mounted.current) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.error(err));
  }, [fetchUrl]);

  return [data, loading];
}
