
import TotalArticle from '@/util/mockData'
import style from './style.module.less'
type Props = {}

const ArticleItem = (props: Props) => {
    return (
        <div className={style.item_container}>
            {
                TotalArticle.map((item: any, index: number) => {
                    return (
                        <>
                            <div className={style.arcticle_item} key={`${index}_${item.articleTitle}`}>
                                <div className={style.item_top}>
                                    <span className={style.article_title}>{item.articleTitle}</span>
                                    <div>
                                        <span></span>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className={style.item_bottom}>
                                    <span>{item.articleCreateTime}</span>
                                    <div>{item.articleTags.map((_item: string) => {
                                        return (
                                            <span>{_item}</span>
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