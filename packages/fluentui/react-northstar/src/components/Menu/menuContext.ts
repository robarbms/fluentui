import { createContext } from '@fluentui/react-bindings';
import { ComponentVariablesInput } from '@fluentui/styles';
import * as React from 'react';
import { Accessibility } from '@fluentui/accessibility';
import { MenuItemProps } from './MenuItem';

export type MenuContextValue = {
  activeIndex: number;
  variables: ComponentVariablesInput;
  onItemClick: (e: React.KeyboardEvent | React.MouseEvent, itemProps: MenuItemProps) => void;
  onItemSelect: (e: React.KeyboardEvent | React.MouseEvent, itemIndex: number) => void;

  slotProps: {
    item: Record<string, any>;
    divider: Record<string, any>;
  };

  behaviors: {
    item: Accessibility;
    divider: Accessibility;
  };

  slots: {
    menu: React.ElementType;
  };
};

export type MenuItemSubscribedValue = Pick<MenuContextValue, 'variables' | 'onItemClick' | 'onItemSelect'> & {
  slotProps: MenuContextValue['slotProps']['item'];
  accessibility: MenuContextValue['behaviors']['item'];
  menuSlot: MenuContextValue['slots']['menu'];
  active: boolean;
};

export type MenuDividerSubscribedValue = Pick<MenuContextValue, 'variables'> & {
  slotProps: MenuContextValue['slotProps']['divider'];
  accessibility: MenuContextValue['behaviors']['divider'];
};

export const MenuContext = createContext<MenuContextValue>({
  activeIndex: -1,
  variables: {},
  onItemClick: null,
  onItemSelect: null,
  slotProps: {
    item: {},
    divider: {},
  },
  behaviors: {
    item: undefined,
    divider: undefined,
  },
  slots: {
    menu: null,
  },
});

export const MenuContextProvider = MenuContext.Provider;
