import React, {useState} from 'react';

type InitialValuesProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const initialValues: InitialValuesProps = {
  currentStep: 0,
  setCurrentStep: () => undefined
} 