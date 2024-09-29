import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const PinInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const otpValue = Number(otp.join(''));
  const router = useRouter();

  const handleChangeOtp = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.target.value.replace(/[^\d]/g, '').length > 0 ||
      e.target.value === ''
    ) {
      // Handle OTP input value change
      const newOtp = [...otp];
      newOtp[index] = e.target.value.replace(/[^\d]/g, '');
      setOtp(newOtp);

      // Focus the next input field if current one has a value and is not the last input
      if (e.target.value && e.target.nextSibling) {
        // @ts-ignore
        e.target.nextSibling.focus();
      }
    }
    // Focus the previous input field if the user pressed 'Backspace' and the input is empty
    if (
      // @ts-ignore
      e.nativeEvent.inputType! === 'deleteContentBackward' &&
      e.target.previousSibling
    ) {
      // @ts-ignore
      e.target.previousSibling.focus();
    }
  };

  console.log(otpValue);

  return (
    <>
      <div className="flex justify-between">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            value={data}
            maxLength={1}
            className="aspect-square h-auto w-[14%] rounded-md border border-base-content/0 bg-base-100 text-center outline-none hover:border-base-content/10 hover:bg-base-300/50 focus:border focus:border-base-content/10 focus:bg-base-300/50 focus:outline-none"
            onChange={(e) => handleChangeOtp(e, index)}
          />
        ))}
      </div>
      <button
        className="mt-6 h-9 w-full rounded bg-primary font-medium text-primary-content hover:bg-primary/60 disabled:cursor-not-allowed disabled:bg-primary/50"
        type="button"
        // isLoading={isPending}
        disabled={otp.includes('')}
        onClick={() => router.replace('/')}
      >
        Submit
      </button>
    </>
  );
};
