import { type SidebarType } from '../../../package/type';

const mysqlItems: SidebarType[] = [
    {
        icon: '🔸',
        text: 'Windows 下 MySQL 8.0 安装与配置',
        link: '/learn/sql/mysql/mysql_8.0_installation_and_configuration_in_windows',
        collapsed: false,
        items: [
            { icon: '🔸', text: 'ZIP 方式安装的配置方法', link: '/learn/sql/mysql/mysql_8.0_zip_configuration' }
        ]
    },
    { icon: '🔸', text: 'MySQL 8.0 以上版本忘记密码重置方式', link: '/learn/sql/mysql/mysql_8.0_reset_password' }
];

export default mysqlItems;
