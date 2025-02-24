import { ReactNode } from 'react';

const BottomButtonPanel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full fixed bottom-0 left-0 flex flex-row items-center justify-center py-3 box-border text-center subtle2-semibold z-10">
      <div className="w-full max-w-[375px] px-5 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BottomButtonPanel;
