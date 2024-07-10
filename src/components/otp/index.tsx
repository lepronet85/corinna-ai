import React, { Dispatch, SetStateAction } from "react";
import { InputOTP, InputOTPSlot } from "../ui/input-otp";

type Props = {
  otp: string;
  setOTP: Dispatch<SetStateAction<string>>;
};

const OTPInput = ({ otp, setOTP }: Props) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={setOTP}>
      <div>
        <InputOTPSlot index={0} />
      </div>
      <div>
        <InputOTPSlot index={1} />
      </div>
      <div>
        <InputOTPSlot index={2} />
      </div>
      <div>
        <InputOTPSlot index={3} />
      </div>
      <div>
        <InputOTPSlot index={4} />
      </div>
      <div>
        <InputOTPSlot index={5} />
      </div>
    </InputOTP>
  );
};

export default OTPInput;
