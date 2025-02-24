import ExperienceStep from '@/components/Onboard/ExperienceStep';
import JobStep from '@/components/Onboard/JobStep';
import NameStep from '@/components/Onboard/NameStep';
import { UserInfoProvider } from '@/hooks/useUserInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const enum FunnelStep {
  NAME = 1,
  JOB = 2,
  EXPERIENCE = 3,
}
const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<FunnelStep>(FunnelStep.NAME);
  const handleOnGoBack = () => {
    if (currentStep === FunnelStep.NAME) navigate('/');
    else setCurrentStep(currentStep - 1);
  };
  const handleOnNext = () => {
    if (currentStep !== FunnelStep.EXPERIENCE) setCurrentStep(currentStep + 1);
  };
  const renderStep = () => {
    switch (currentStep) {
      case FunnelStep.NAME:
        return <NameStep onBack={handleOnGoBack} onNext={handleOnNext} />;
      case FunnelStep.JOB:
        return <JobStep onBack={handleOnGoBack} onNext={handleOnNext} />;
      case FunnelStep.EXPERIENCE:
        return <ExperienceStep onBack={handleOnGoBack} />;
      default:
        return <NameStep onBack={handleOnGoBack} onNext={handleOnNext} />;
    }
  };
  return (
    <div className='w-full px-5 inset-0'>
      <UserInfoProvider>{renderStep()}</UserInfoProvider>
    </div>
  );
};

export default OnboardingPage;
