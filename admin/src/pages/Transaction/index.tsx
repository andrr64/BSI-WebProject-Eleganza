import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { ReactNode } from 'react';

const Card: React.FC<{ children: ReactNode, size: String }> = ({ children, size }) => {
  return (
    <div className={`${size} rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}>
      {children}
    </div>
  );
}

const Transaction = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Transaksi" />

      {/* <!-- ====== Transaction Section Start ====== --> */}
      <div className='flex space-x-10'>
        <Card size={'w-7/12'}>
          <div className='m-3'>
            List Transaksi
          </div>
        </Card>
        <Card size={'w-4/12'}>
          <div className='m-3'>
            Info Transaksi
          </div>
        </Card>
      </div>
      {/* <!-- ====== Transaction Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Transaction;
