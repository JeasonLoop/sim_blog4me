// import React from 'react'
import BlogContent from '../content'
import BlogHeader from '../header'
import BlogFooter from '../footer'
import style from './style.module.less'

// type Props = {}

const Main = (props: any) => {
    return (
        <div className={style.main}>
            <BlogHeader />
            <BlogContent />
            <BlogFooter />
        </div>
    )
}


export default Main