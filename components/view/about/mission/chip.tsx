export default function MissionChip({ text }: { text: string }) {
  return (
    <div className="px-[1rem] py-[0.35rem] rounded-[2rem] inline-block text-[0.7rem] minitab:border-[2px] text-primaryColors-purple600  border-[1.5px] font-[300] desktop:border-[0.2vw]">
      {text}
    </div>
  );
}
