import style from "./Botao.module.scss";

export interface BotaoProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Botao({
  onClick,
  children,
  type = "button",
}: BotaoProps) {
  return (
    <>
      <button type={type} className={style.botao} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
