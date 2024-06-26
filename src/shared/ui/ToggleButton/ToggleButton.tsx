import { FC } from "react";
import cls from "./ToggleButton.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ToggleButtonProps {
  isToggle?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const { isToggle = false, onClick, children, className = "" } = props;
  return (
    <button
      className={classNames(cls.ToggleButton, [className])}
      onClick={onClick}
    >
      <div className={classNames(cls.switch, [isToggle ? cls.is_toggle : ""])}>
        {children}
      </div>
    </button>
  );
};
