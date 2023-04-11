import { Navigate, Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/layout/AppLayout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Navigate to='login' />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);

export default App;
