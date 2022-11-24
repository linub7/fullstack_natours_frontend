import ResetPasswordComponent from 'components/auth-components/reset-password/ResetPasswordComponent';
import CommonLayout from 'components/shared/CommonLayout';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  return (
    <CommonLayout>
      <ResetPasswordComponent token={token} />
    </CommonLayout>
  );
};

export default ResetPassword;
