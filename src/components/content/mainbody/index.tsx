// import * as React from 'react';
import { useState } from 'react';
import Article from './article'
import AuthorInfo from './authorInfo'
import style from './style.module.less'

const MainBody = () => {
    return (
        <div className={style.main_body} >
            <Article />
            <AuthorInfo />
        </div>
    )

}


export default MainBody