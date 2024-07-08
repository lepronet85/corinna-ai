import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
import RegistrationFromStep from "@/components/forms/sign-up/registration-step";
import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-32 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFromStep></RegistrationFromStep>
          </div>
        </SignUpFormProvider>
      </div>
    </div>
  );
};

export default SignUp;
