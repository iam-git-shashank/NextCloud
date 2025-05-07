import type { IResourceItem } from '@refinedev/core';

export const resources: IResourceItem[] = [

  {
    name: 'companies',
    list: '/companies',
    show: '/companies/:id',
    create: '/companies/new',
    edit: '/companies/edit/:id',
    meta: {
      label: 'Companies',
    },
  },
  
];
