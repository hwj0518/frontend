const TrendSkillsSection = () => {
  return (
    <>
      <section className="px-5 py-5">
        <div className="flex flex-col p-5 gap-5 w-full bg-white border border-[#E5EAFB] backdrop-blur-sm rounded-2xl drop-shadow-[0_0_12px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center p-2 aspect-square w-12 bg-[#F7F9FC] rounded-lg">
              <span className="text-2xl leading-[140%] text-center tracking-[-0.27px] text-[#0B0B0B]">
                🔮
              </span>
            </div>
            <h2 className="flex-1 font-semibold text-lg leading-[140%] text-[#222222] whitespace-pre-line">
              {`프로덕트 디자이너\n트렌드 기술 역량`}
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            <div className="flex justify-center items-center py-2 px-4 bg-[#F7F9FC] rounded-[20px]">
              <span className="font-medium text-sm leading-[150%] text-[#222222]">
                # Figma
              </span>
            </div>
            <div className="flex justify-center items-center py-2 px-4 bg-[#F7F9FC] rounded-[20px]">
              <span className="font-medium text-sm leading-[150%] text-[#222222]">
                # Figma
              </span>
            </div>
            <div className="flex justify-center items-center py-2 px-4 bg-[#F7F9FC] rounded-[20px]">
              <span className="font-medium text-sm leading-[150%] text-[#222222]">
                # Figma
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendSkillsSection;
