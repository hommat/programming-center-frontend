import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function<T>(fetchUrl: string): [T[], boolean] {
  const mounted = useRef<boolean>(true);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect((): VoidFunction => {
    axios
      .get<T[]>(fetchUrl)
      .then(res => {
        if (mounted.current) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.error(err));

    return () => (mounted.current = false);
  }, [fetchUrl]);

  return [data, loading];
}
