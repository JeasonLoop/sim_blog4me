// import React from 'react'
import BlogContent from '../content'
import BlogHeader from '../header'
import BlogFooter from '../footer'
import style from './style.module.less'

// type Props = {}

// TODO: 整体框架
const Main = (props: any) => {
    return (
        <div className={style.main} >
            <BlogHeader />
            <div className={style.bg_container}>
                <BlogContent />
                <BlogFooter />
            </div>

        </div>
    )
}


export default Main