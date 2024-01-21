import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CLIENTS } from '@/graphql/querys';
import { BarChart } from '@/components/BarChart';

export const Graphql = () => {
  const { loading, error, data } = useQuery(GET_ALL_CLIENTS);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data?.allClient) {
      setChartData(data.allClient);
    }
  }, [data]);

  if (loading) return <h2 className='mx-3'>Cargando..</h2>;
  if (error) return <h2 className='mx-3'>Error: {error.message}</h2>;

  return (
    <div style={{ height: '100vh' }}>
      <div className='contentwithoutsidebar3'>
        <h4 className='text-center'>
          <b>Reporte de graphql</b>
        </h4>
        <BarChart data={chartData} />
      </div>
    </div>
  );
};
