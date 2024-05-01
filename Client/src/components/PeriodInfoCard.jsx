export default function PeriodInfoCard({ date, type, children }) {
  return (
    <div className="text-white bg-primary500 p-5 flex flex-col gap-5">
      <p className="text-xl font-medium text-primary500 bg-white px-4 py-[10px] rounded-md">
        {date}
      </p>
      <h3 className="text-2xl font-semibold">{type}</h3>
      <p className="w-[292px] text-base">{children}</p>
    </div>
  );
}
