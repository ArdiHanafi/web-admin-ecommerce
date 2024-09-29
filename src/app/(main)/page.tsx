'use client';

import dynamic from 'next/dynamic';
import { ChartData, ChartOptions } from 'chart.js';
import { Suspense, useContext } from 'react';
import { Loading } from '@/components/molecules';
import { ThemeContext } from '@/contexts/ThemeContext';
import { oklchOpacity } from '@/lib/utils';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const Page: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dataUsersLogin: ChartData<'line'> = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: '',
        data: [100, 87, 120, 150, 500],
        fill: true,
        borderColor: colors.primary,
        tension: 0.1,
      },
    ],
  };

  const dataNewUsers: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: '',
        data: [905, 305, 699, 200, 900, 1352, 2000],
        fill: true,
        borderColor: colors.primary,
        tension: 0.1,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    scales: {
      x: {
        ticks: {
          color: colors.baseContent,
        },
        grid: {
          color: oklchOpacity(colors.baseContent, 15),
        },
      },
      y: {
        ticks: {
          color: colors.baseContent,
        },
        grid: {
          color: oklchOpacity(colors.baseContent, 15),
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: colors.primary,
        },
      },
      tooltip: {
        titleColor: colors.primary,
        bodyColor: colors.baseContent,
        borderWidth: 1,
        borderColor: colors.baseContent,
        backgroundColor: colors.base300,
      },
    },
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="rounded-md bg-base-200 p-6">
        <h1 className="text-center text-2xl font-semibold tracking-wider text-base-content">
          DASHBOARD
        </h1>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-base-content/10 p-4">
            <h3 className="mb-4 text-center text-lg font-medium text-base-content/80">
              Users Login (per day)
            </h3>
            <Line data={dataUsersLogin} options={chartOptions} />
          </div>
          <div className="rounded-lg border border-base-content/10 p-4">
            <h3 className="mb-4 text-center text-lg font-medium text-base-content/80">
              New Users (per Month)
            </h3>
            <Line data={dataNewUsers} options={chartOptions} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
