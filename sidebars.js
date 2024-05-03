/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [

    // {
    //   type: 'html',
    //   value: 'Get started',
    //   className: 'utils-mt-22 utils-fontWeight-700 utils-font-xs ',
    // },
    {
      type: 'doc',
      id: 'index', // document ID
      label: 'Overview', // sidebar label
      className: "icon-zap icon-sidebar-nocollapsible",
    },
    // },
    {
      type: 'html',
      value: 'Platform',
      className: 'utils-mt-22 utils-fontWeight-700 utils-font-xs',
    },
    // {
    //   type: 'html',
    //   value: 'Scan your documents<br> in 3 no-code steps',
    //   className: 'utils-fontWeight-600 utils-lineHeight-normal',
    // },
     
    {
      type: 'category',
      label: 'AI Studio',
      className: "icon-cube icon-sidebar-collapsible",
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'aiStudio', // Generate sidebar slice from docs/preliminaries
        }
      ],
    },
    {
      type: 'category',
      label: 'AI Validator',
      className: "icon-usercheck icon-sidebar-collapsible",
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'aiValidator', // Generate sidebar slice from docs/get-started
        }
      ],
    },
    
    // {
    //   type: 'html',
    //   value: 'Integrations',
    //   className: 'utils-mt-22 utils-fontWeight-700 utils-font-xs utils-mt-22',
    // },
    // {
    //   type: 'doc',
    //   id: 'bluePrism', // document ID
    //   label: 'Blue Prism', // sidebar label
    //   className: 'utils-font-sm utils-ml-10',
    // },
    // {
    //   type: 'doc',
    //   id: 'powerAutomate', // document ID
    //   label: 'Power Automate', // sidebar label
    //   className: 'utils-font-sm utils-ml-10',
    // },
    // {
    //   type: 'doc',
    //   id: 'uiPath', // document ID
    //   label: 'UI Path', // sidebar label
    //   className: 'utils-font-sm utils-ml-10',
    // },
    // {
    //   type: 'doc',
    //   id: 'zapier', // document ID
    //   label: 'Zapier', // sidebar label
    //   className: 'utils-font-sm utils-ml-10',
    // },

    {
      type: 'html',
      value: 'Resources',
      className: 'utils-mt-22 utils-fontWeight-700 utils-font-xs',
    },

    {
      type: 'category',
      label: "Integrations",
      className: "icon-integrations icon-sidebar-collapsible",
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrations', // Generate sidebar slice from docs/get-started
        }
      ],
    },

    // {
    //   type: 'category',
    //   label: "Templates",
    //   className: "icon-code icon-sidebar-collapsible",
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'templates', // Generate sidebar slice from docs/get-started
    //     }
    //   ],
    // },
    
    {
    type: 'category',
    label: 'API reference',
    className: "icon-code icon-sidebar-collapsible",
    items: [
      {
        type: 'autogenerated',
        dirName: 'reference', // Generate sidebar slice from docs/get-started
      }
    ],
  },
  {
    type: 'html',
    value: '<hr/>',

  },

    {
      type: 'category',
      label: 'Legal & Compliance',
      className: "icon-compliance icon-sidebar-collapsible",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'legal', // Generate sidebar slice from docs/human-in-the-loop
        }
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Security & Compliance',
    //   className: "icon-shield icon-sidebar-collapsible",
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'security', // Generate sidebar slice from docs/human-in-the-loop
    //     }
    //   ],
    // },
    // {
    //   type: 'doc',
    //   label: "Billing & Usage",
    //   id: "billing",
    //   className: "icon-billing icon-sidebar-nocollapsible",
    // },
    {
      type: 'doc',
      id: 'changelog', // document ID
      label: 'Changelog', // sidebar label
      className: "icon-changelog icon-sidebar-nocollapsible",
     },
  ]
};

export default sidebars;
