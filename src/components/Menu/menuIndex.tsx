const menuIndex = {
  data: [
    {
      name: 'Dashboard',
      url: '/item1',
    },
    {
      name: 'Certificados SSL',
      url: '/item1',
    },
    {
      name: 'Blindagem de site',
      url: '/item1',
    },
    {
      name: 'Loja',
      url: '/item2',
    },
    {
      name: 'WAF',
      children: [
        {
          name: 'Child31',
          url: '/child31',
        },
        {
          name: 'Child32',
          url: '/child32',
        },
        {
          name: 'Child33',
          url: '/child33',
        },
      ],
    },
  ],
  system: [
    {
      name: 'Sistema',
      url: '/item1',
    },
    {
      name: 'Organizações',
      children: [
        {
          name: 'Child41',
          url: '/child41',
        },
        {
          name: 'Child42',
          url: '/child42',
        },
      ],
    },
  ],
};

export default menuIndex;
