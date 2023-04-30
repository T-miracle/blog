import { DefaultTheme } from 'vitepress/types/default-theme';

const mysqlItems: DefaultTheme.SidebarItem[] = [
    {
        text: '🔸 Windows 下 MySQL 8.0 安装与配置',
        link: '/learn/sql/mysql/mysql_8.0_installation_and_configuration_in_windows.md',
        collapsed: false,
        items: [
            { text: '🔸 ZIP 方式安装的配置方法', link: '/learn/sql/mysql/mysql_8.0_zip_configuration.md' }
        ]
    }
];

export default mysqlItems;
