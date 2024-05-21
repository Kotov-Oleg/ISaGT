import React, {useState, useEffect, FC} from 'react';
import axios from "axios";

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:5000/api/events/1',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwic3VybmFtZSI6ItCd0L7QstC-0YHRgtC10LkiLCJuYW1lIjoi0JDQtNC80LjQvSIsInBhdHJvbnltaWMiOm51bGwsImFjY2VzcyI6eyJzdXBlciI6dHJ1ZSwic2xpZGVyIjp0cnVlLCJuZXdzIjp0cnVlLCJwYWdlcyI6dHJ1ZSwiZXZlbnRzIjpmYWxzZSwiZmFxIjpmYWxzZX19.InXEdL1N67UMLy85kZUX4AmTpapbyZ2bZegVE6Cm5DA'
  }
};

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    await timeout(3000)
    return response
  }
  catch (error) {
    console.log(error);
  }
}

const ParentComponent = () => {
  const [dataZombieChild, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeRequest()

        // Judging whether the parent component still exists in the callback function
        // if (!isUnmounted) {
        //   console.log('сохранение данных')
        //   setData(response);
        //   console.log('данные сохранены')
        // } else {
        //   console.log('данные не сохранены')
        // }
        setData(response);
        console.log('данные сохранены')
      } catch (error) {
        console.error(error);
      }
    };

    let isUnmounted = false;

    fetchData();

    return () => {
      // Cancel the asynchronous operation when the parent component is destroyed
      console.log('parent destroyed')
      isUnmounted = true;
    };
  }, []);

  return (
    <div>
      {dataZombieChild ? (
        <ChildComponent data={dataZombieChild} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

interface ChildI {
  data: Object
}
const ChildComponent: FC<ChildI> = ({ data }) => {
  console.log('render child', data)

  useEffect(() => {
    return () => {
      console.log('child destroyed')
    }
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default ParentComponent;