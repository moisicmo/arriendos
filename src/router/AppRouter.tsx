import { useEffect } from 'react';
import { useAuthStore } from '../hooks';
import { AuthPage } from '../views/auth/AuthPage';
import { Layout } from '../views/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardView } from '../views/pages/dashboard/DashboardView';
import { ReportsView } from '../views/pages/reports/ReportsView';
import { CustomersView } from '../views/pages/customers/CustomersView';
import { UsersView } from '../views/pages/users/UsersView';
export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    };

    return (
        (status != 'not-authenticated') ?
            <AuthPage />
            :
            <Layout>
                <Routes>
                    <Route path="/dashboardView" element={<DashboardView />} />
                    <Route path="/reportsView" element={<ReportsView />} />
                    {/* module customers */}
                    <Route path="/customersView" element={<CustomersView />} />
                    {/* module users */}
                    <Route path="/usersView" element={<UsersView />} />

                    {/*  */}
                    <Route path="/*" element={<Navigate to={"/dashboardView"} />} />
                </Routes>
            </Layout>
    )
}
