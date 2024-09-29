import { toast } from 'react-toastify';

export const toastSuccess = async (
  data: string,
  color: { bg: string; text: string; border: string }
) => {
  toast.success(data, {
    progress: undefined,
    style: {
      color: color.text,
      background: color.bg,
      borderLeft: `4px solid ${color.border}`,
    },
  });
};

export const toastError = async (
  data: string,
  color: { bg: string; text: string; border: string }
) => {
  toast.error(data, {
    progress: undefined,
    style: {
      color: color.text,
      background: color.bg,
      borderLeft: `4px solid ${color.border}`,
    },
  });
};

export const copy = async (data: string) => {
  navigator.clipboard.writeText(data);
};

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getShortenAddress = (
  address: string,
  startLength: number = 4,
  endLength: number = 4
): string => {
  if (!address) return '';
  const { length } = address;

  if (length < startLength + endLength) {
    return address;
  }

  if (endLength > 0) {
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
  }
  return `${address.slice(0, startLength)}...`;
};

export const oklchOpacity = (
  oklchString: string,
  opacityPercentage: number
): string => {
  const opacity = Math.min(100, Math.max(0, opacityPercentage)) / 100;

  const regex = /oklch\(([\d.]+)\s([\d.]+)\s([\d.]+)\)/;
  const match = oklchString.match(regex);

  if (!match) {
    return '';
  }

  return `oklch(${match[1]} ${match[2]} ${match[3]} / ${opacity})`;
};
