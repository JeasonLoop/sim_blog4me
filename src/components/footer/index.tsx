// import * as React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import style from './style.module.less';


// TODO: 博客底部
const BlogFooter = () => {
    const techItems = ['Antd', 'React-Hooks', 'ahook', 'less', 'TypeScript']

    return (
        <div className={style.footer}>
            <div>
                <span className={style.remarks}>Thers is a small blog </span>
                <span>
                    <GithubOutlined />
                    <a className={style.github_link}> https://github.com/JeasonLoop/sim_blog4me</a>
                </span>
                <span className={style.copyright}>
                    你猜我拿的到版权吗
                </span>
            </div>

            <span className={style.tech_stack}>
                {techItems.map((item: String) => {
                    return (
                        <div className={style.tech_item}>{item}</div>
                    )
                })}
            </span>
        </div >
    )

}


export default BlogFooter