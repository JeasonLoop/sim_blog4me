
import TotalArticle from '@/util/mockData'
import { limitWords } from '@/util/hooks/normalFn'
import style from './style.module.less'
type Props = {}

// TODO: 单篇文章的Item
const ArticleItem = (props: Props) => {
    return (
        <div className={style.item_container}>
            {
                TotalArticle.map((item: any, index: number) => {
                    return (
                        <>
                            <div className={style.arcticle_item} key={`${item.articleTitle}_${index}`}>
                                <div className={style.item_top}>
                                    <span className={style.article_title}>{item.articleTitle}</span>
                                    <div className={style.content_container}>
                                        <span className={style.arcticle_content}>{limitWords(item.articleContent)}</span>
                                        <img src={item.articleCoverImg} alt="" />
                                    </div>
                                </div>
                                <div className={style.item_bottom}>
                                    <span>{item.articleCreateTime}</span>
                                    <div className={style.bottom_tags}>{item.articleTags.map((_item: string, index: number) => {
                                        return (
                                            <span key={`${_item}_${index}`}>{_item}</span>
                                        )
                                    })}</div>
                                </div>
                            </div>

                        </>
                    )
                })
            }
        </div>

    )
}

export default ArticleItem