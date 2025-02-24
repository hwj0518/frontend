import { ReactNode } from 'react';

const BottomButtonPanel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full absolute bottom-0 left-0 flex flex-row items-start justify-start px-4 py-3 box-border text-center subtle2-semibold z-10">
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default BottomButtonPanel;
