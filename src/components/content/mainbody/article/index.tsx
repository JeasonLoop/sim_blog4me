// import React from 'react'
import ArticleItem from './articleItem'
import style from './style.module.less'
type Props = {}

export type ArticleItem = {
    // 文章封面
    articleCoverImg: string,

    // 文章标题
    articleTitle: string,

    // 创建实践
    articleCreateTime: string,

    // 文章标签
    articleTags: Array<string>,

    // 文章内容
    articleContent: string,

}

// 文章列表主体
const Article = (props: Props) => {

    return (
        <div className={style.article}>
            <ArticleItem />
        </div>
    )
}

export default Article