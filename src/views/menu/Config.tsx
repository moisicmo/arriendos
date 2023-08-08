import { CompareArrowsOutlined, IndeterminateCheckBox, ListAltOutlined, MenuOutlined, Person2Outlined, PortraitOutlined, Wifi, Work } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export const items = () => {

    return [
        {
            title: 'Tablero general',
            subitems: [
                {
                    title: 'Descipción General',
                    path: '/dashboardView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <Wifi />
                        </SvgIcon>
                    ),
                },
            ],
        },
        {
            title: 'Gestión de Arriendos',
            subitems: [
                {
                    title: 'Ambientes',
                    path: '/productsView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <IndeterminateCheckBox />
                        </SvgIcon>
                    ),
                },
                {
                    title: 'Arriendos',
                    path: '/movementsView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <CompareArrowsOutlined />
                        </SvgIcon>
                    ),
                },
                {
                    title: 'Reservas',
                    path: '/ordersView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <ListAltOutlined />
                        </SvgIcon>
                    ),
                },
            ].filter(Boolean),
        },
        {
            title: 'Gestión de Clientes',
            subitems: [
                {
                    title: 'Clientes',
                    path: '/customersView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <Person2Outlined />
                        </SvgIcon>
                    ),
                },
            ].filter(Boolean),
        },
        {
            title: 'Gestión de Personal',
            subitems: [
                {
                    title: 'Usuarios',
                    path: '/usersView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <Person2Outlined />
                        </SvgIcon>
                    ),
                },
                {
                    title: 'Tipos de usuario',
                    path: '/typeUsersView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <PortraitOutlined />
                        </SvgIcon>
                    ),
                },
                {
                    title: 'Roles',
                    path: '/rolesView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <Work />
                        </SvgIcon>
                    ),
                },
            ].filter(Boolean),
        },
        {
            title: 'Reportes',
            subitems: [
                {
                    title: 'Reportes',
                    path: '/reportsView',
                    icon: (
                        <SvgIcon fontSize="small">
                            <MenuOutlined />
                        </SvgIcon>
                    ),
                },
            ].filter(Boolean),
        },
    ].filter(Boolean);
}

