import Logo from "../assets/PERIOD SLAY LOGO.png";
export default function Slogan() {
  return (
    <div className="w-[350px] h-[450px] rounded-xl bg-white flex flex-col items-center justify-center gap-4 p-12">
      <img src={Logo} alt="Logo" />
      <h1 className="w-[192px] text-[36px] font-DmSerif text-primary500">
        Everything you need to know about your period
      </h1>
    </div>
  );
}
