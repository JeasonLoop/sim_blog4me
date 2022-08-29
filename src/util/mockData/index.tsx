import { ArticleItem } from "@/components/content/mainbody/article"

let TotalArticle: ArticleItem[] = []
const articleList: ArticleItem =

{
    // 文章封面
    articleCoverImg: '',

    // 文章标题
    articleTitle: 'test blog',

    // 创建时间
    articleCreateTime: '2022-02-02',

    // 文章标签
    articleTags: ['t1', 't2', 't3'],

    // 文章内容
    articleContent: '我们总是寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅寻寻觅觅',
}


for (let index = 0; index < 15; index++) {
    TotalArticle.push(articleList)

}

export default TotalArticle
