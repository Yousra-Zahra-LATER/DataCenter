import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar, cilUser, cilContact
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

const services = [
  { name: 'Hosting Web', to: '/service/hostingweb' },
  {
    name: 'VPS',
    to: '/service/vps',
    items: [
      { name: 'Standard', to: '/service/vps' },
      { name: 'Performance', to: '/service/vps/performance' },
      { name: 'Storage', to: '/service/vps/premium' },
    ],
  },
  { name: 'VPC', to: '/service/vpc' },
  { name: 'Backup', to: '/service/backup' },
  { name: 'Object Storage', to: '/service/objectstorage' },
  { name: 'DNS', to: '/service/DNS' },
  { name: 'Email', to: '/service/MAIL' },
];

const account = [
  { name: 'Profile', to: '/account' },
  { name: 'Authentication', to: '/authentication' },
];

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <LuLayoutDashboard className='nav-icon' />,
  },
  {
    component: CNavGroup,
    name: 'Services',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: services.map((service) => {
      if (service.items) {
        return {
          component: CNavGroup,
          name: service.name,
          to: service.to,
          items: service.items.map((subItem) => ({
            component: CNavItem,
            name: subItem.name,
            to: subItem.to,
            className: '', // Utilisez Tailwind CSS pour ajouter du padding à gauche
          })),
        };
      } else {
        return {
          component: CNavItem,
          name: service.name,
          to: service.to,
        };
      }
    }),
  },
  {
    component: CNavGroup,
    name: 'Account',
    icon: <MdOutlineManageAccounts className='nav-icon' />,
    items: account.map((acc) => ({
      component: CNavItem,
      name: acc.name,
      to: acc.to,
    })),
  },
  {
    component: CNavItem,
    name: 'Support',
    to: '/support', // Assurez-vous que ce chemin est correct
    icon: <RiCustomerService2Line className='nav-icon' />,
  },
];

export default _nav;
