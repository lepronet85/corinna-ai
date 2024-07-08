"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  value,
  title,
  text,
  register,
  userType,
  setUserType,
}: Props) => {
  return (
    <Label>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType == value && "border-orange"
        )}
      ></Card>
    </Label>
  );
};

export default UserTypeCard;
