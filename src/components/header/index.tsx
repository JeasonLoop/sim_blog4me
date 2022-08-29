import { useState, memo } from 'react';

import type { MenuProps } from 'antd';
// import { apiGetPoem } from '../request/type.js'

import { Menu } from 'antd';
import style from './style.module.less'


// TODO: 博客顶部
const BlogHeader: React.FC = () => {
    const [current, setCurrent] = useState('home');
    const items: MenuProps['items'] = [
        {
            label: '主页',
            key: 'home',
            icon: ''
        }, {
            label: '归档',
            key: 'collect',
            icon: ''
        }, {
            label: '图库',
            key: 'image',
            icon: ''
        }, {
            label: '留言',
            key: 'message',
            icon: ''
        }, {
            label: '关于',
            key: 'about',
            icon: ''
        }]

    const handleMenuChange: MenuProps['onClick'] = e => {
        setCurrent(e.key);
    };

    return <div className={style.header}>
        <Menu onClick={handleMenuChange} selectedKeys={[current]} mode="horizontal" items={items} />

    </div>
}





export default memo(BlogHeader)