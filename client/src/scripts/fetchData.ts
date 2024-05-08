import {useEffect, useState} from "react";

export const useFetchData = <T, S>(
  req: ((a?: T) => Promise<S>),
  condition?: boolean
) => {
  const [data, setData] = useState<S | null>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const update = async (): Promise<S | null> => {
    if (condition === false) {
      return null
    }
    setIsLoading(true)
    await req()
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    update()
  }, []);

  return {data, error, isLoading, update}
}


