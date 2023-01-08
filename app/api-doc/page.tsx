import { use } from 'react';
import { getApiDocs } from '../../swagger/config';
import ReactSwagger from './ReactSwagger';

const dataPromise = getApiDocs();
export function ApiDocPage() {
  const spec = use(dataPromise);
  return <ReactSwagger spec={spec} />;
}

export default ApiDocPage;
