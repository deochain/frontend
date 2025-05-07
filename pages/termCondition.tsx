import type { NextPage } from 'next';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

import TermCondition from 'ui/pages/TermCondition';

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/termCondition">
      <TermCondition/>
    </PageNextJs>
  );
};

export default Page;

export { stats as getServerSideProps } from 'nextjs/getServerSideProps';
