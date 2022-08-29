// import * as React from 'react';
import { useState } from 'react';
import Poem from './poem'
import Article from './mainbody/article'
import style from './style.module.less'

const BlogContent = () => {
    return (
        <div className={style.content}>
            <Poem />
            <Article />
        </div>
    )

}


export default BlogContent