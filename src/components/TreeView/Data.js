const menu = [
  {
    label: "Home",
    path: "/home",
    submenu: [
      {
        label: "Dashboard",
        path: "/home/dashboard",
      },
      {
        label: "Profile",
        path: "/home/profile",
      },
    ],
  },
  {
    label: "Settings",
    path: "/settings",
    submenu: [
      {
        label: "Account",
        path: "/settings/account",
      },
      {
        label: "Privacy",
        path: "/settings/privacy",
      },
      {
        label: "Notifications",
        path: "/settings/notifications",
      },
    ],
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Help",
    path: "/help",
    submenu: [
      {
        label: "FAQ",
        path: "/help/faq",
      },
      {
        label: "Contact Us",
        path: "/help/contact",
        submenu: [
          {
            label: "E-mail",
            path: "help/contact/email",
          },
          {
            label: "Phone",
            path: "help/contact/phone",
          },
        ],
      },
    ],
  },
  {
    label: "Logout",
    path: "/logout",
  },
];

export default menu;
