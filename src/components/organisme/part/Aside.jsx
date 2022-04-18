import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import { useTranslation } from "react-i18next";
import "../../../style/module/proSidebar/styles.scss";
import propTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import IconList from "../../molekul/sidebar/IconList";
import MenuList from "../../../constants/menu/MenuList";

function Aside({ collapsed, rtl, toggled, handleToggleSidebar }) {
  const { t } = useTranslation("navbar");
  const location = useLocation();
  return (
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="lg"
      onToggle={handleToggleSidebar}
    >
      <SidebarContent>
        <Menu>
          {MenuList.map((item) => (
            <div>
              {item.child.length > 0 ? (
                <SubMenu
                  title={t(`label.${item.alias}`)}
                  icon={
                    <IconList
                      name={item.icon}
                      propClass={
                        location.pathname === item.route
                          ? "fill-primary stroke-primary"
                          : "fill-neutral stroke-neutral"
                      }
                    />
                  }
                >
                  {item.child.map((subMenu) => (
                    <MenuItem>
                      <NavLink to="/login">
                        {t(`label.${subMenu.alias}`)}
                      </NavLink>
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  icon={
                    <IconList
                      name={item.icon}
                      propClass={
                        location.pathname === item.route
                          ? "text-primary"
                          : "fill-neutral stroke-neutral"
                      }
                    />
                  }
                >
                  <NavLink to={item.route}>{t(`label.${item.alias}`)}</NavLink>
                </MenuItem>
              )}
            </div>
          ))}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}

Aside.propTypes = {
  rtl: propTypes.any.isRequired,
  collapsed: propTypes.any.isRequired,
  toggled: propTypes.any.isRequired,
  handleToggleSidebar: propTypes.any.isRequired,
};

export default Aside;
