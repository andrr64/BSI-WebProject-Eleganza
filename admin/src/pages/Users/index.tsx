import DefaultLayout from '../../layout/DefaultLayout';
import { ReactNode } from 'react';

const Card: React.FC<{ children: ReactNode, size: String }> = ({ children, size }) => {
    return (
        <div className={`${size} rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}>
            {children}
        </div>
    );
}

import React from 'react'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Users = () => {
  return (
    <DefaultLayout>
        <Breadcrumb pageName='Akun Pengguna'/>
        <div>

        </div>
    </DefaultLayout>
  )
}

export default Users;