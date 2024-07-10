import React, { Dispatch, SetStateAction } from "react";

type Props = {
  onOTP: string;
  setOTP: Dispatch<SetStateAction<string>>;
};

const OTPForm = ({ onOTP, setOTP }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
    </>
  );
};

export default OTPForm;
