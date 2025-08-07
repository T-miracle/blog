import type { SidebarType } from '../../package/type';

const newToolsSidebar: SidebarType[] = [
    {
        text: '学不动，根本学不动',
        link: '/new-tools/',
        readonly: true,
        items: [
            {
                text: '使用 Certbot 生成泛域名 SSL 证书',
                link: '/new-tools/use_certbot_generate_generic_domain_name_ssl_cert'
            },
            {
                text: 'artalk 评论系统安装与配置教程（docker版）',
                link: '/new-tools/docker_install_artalk'
            },
            {
                text: 'Github README 说明文件美化教程',
                link: '/new-tools/readme_beautify'
            }
        ]
    }
];

export default newToolsSidebar;
