import { NavLinkProps as BaseNavLinkProps } from "react-router-dom";
export interface NavLinkPropsInterface extends BaseNavLinkProps {
  className: string;
  activeClassName: string;
  to: string;
  children: string;
}
