import { Link } from 'react-router-dom';
import './CtaLinkButton.css';

type CtaLinkButtonProps = {
  to: string;
  label: string;
  ariaLabel?: string;
  icon?: string;
  tone?: 'default' | 'light';
  className?: string;
};

const CtaLinkButton = ({
  to,
  label,
  ariaLabel,
  icon = '+',
  tone = 'default',
  className = '',
}: CtaLinkButtonProps) => {
  return (
    <Link
      className={`cta-link-button cta-link-button--${tone}${className ? ` ${className}` : ''}`}
      to={to}
      aria-label={ariaLabel ?? label}
    >
      <span className="cta-link-button__label">{label}</span>
      <span className="cta-link-button__icon" aria-hidden="true">
        {icon}
      </span>
    </Link>
  );
};

export default CtaLinkButton;
