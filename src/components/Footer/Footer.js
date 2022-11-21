import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import React from 'react';
import { BiChevronsLeft } from 'react-icons/bi';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import SwitchLanguages from '../SwitchLanguages';
import * as s from './Footer.module.css';

import ToggleMode from '../Toggler';

export const Footer = ({ menuCollapsed, setMenuCollapsed }) => {
  const brakepoints = useBreakpoint();
  const { t } = useTranslation();

  const { toggleSidebar } = t('aria-labels', {
    returnObjects: true,
  });

  return (
    <div className={menuCollapsed ? s.footer : s.collapsedFooter}>
      <SwitchLanguages collapsed={menuCollapsed} />
      <ToggleMode collapsed={menuCollapsed} />

      {brakepoints.md && (
        <button
          className="p-0"
          aria-label={toggleSidebar}
          type="button"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
        >
          <BiChevronsLeft
            className={
              menuCollapsed ? s.collapsedMenuButton : s.uncollapsedMenuButton
            }
            size={24}
          />
        </button>
      )}
    </div>
  );
};
