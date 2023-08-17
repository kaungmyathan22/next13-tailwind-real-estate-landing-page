import BlueRrightArrow from "@/assets/svgs/BlueRightArrow";

export function HowItWorkCard({
  title,
  subtitle,
  logo,
}: {
  title: string;
  subtitle: string;
  logo: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      {logo}
      <h6 className="text-[#3B3C45] text-sm font-medium leading-6 text-center mt-7 mb-3">
        {title}
      </h6>
      <div className="flex items-center gap-x-2">
        <p className="text-sm font-semibold text-[#0689FF] text-center">
          {subtitle}
        </p>
        <BlueRrightArrow />
      </div>
    </div>
  );
}
