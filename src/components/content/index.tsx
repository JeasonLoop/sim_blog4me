// import * as React from 'react';
import { useState } from 'react';
import Poem from './poem'
import MainBody from './mainbody/index';
import bgMain from '@/assets/img/bg_main.png'
import style from './style.module.less'

// TODO: 诗歌以及博客内容主体
const BlogContent = () => {
    // style = {{ backgroundImage: `url(${bgMain})` }

    return (
        <div className={style.content} style={{ backgroundImage: `url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN)` }}>
            <Poem />
            <MainBody />
        </div>
    )

}


export default BlogContent