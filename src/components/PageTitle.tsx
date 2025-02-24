import BackIcon from '@/assets/icons/Icon_Back.svg?react';

type PageTitleProps = {
  onGoBack: () => void;
  title?: string;
  subTitle?: string;
};

const PageTitle = ({ onGoBack, title, subTitle }: PageTitleProps) => {
  return (
    <>
      <header className="w-full pt-3 sticky top-0 bg-white">
        <div className="w-5 h-5" onClick={onGoBack}>
          <BackIcon />
        </div>
      </header>
      {title && (
        <section className="py-6 flex flex-col gap-2">
          <h1 className="head-h1 break-keep">{title}</h1>
          <p className="subtle2-regular text-text-secondary break-keep">
            {subTitle}
          </p>
        </section>
      )}
    </>
  );
};

export default PageTitle;
