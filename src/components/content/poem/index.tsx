import { useMount, useSafeState } from 'ahooks';
import { load } from 'jinrishici';
import style from './style.module.less'

const Poem = () => {
    const [poem, setPoem] = useSafeState('');
    useMount(() => {
        load(
            (res: {
                data: {
                    content: string;
                };
            }) => setPoem(res.data.content)
        );
    });


    return (

        <div className={style.poem}>
            <span className={style.blog_title}><i>-</i>不是博客的博客<i>-</i></span>
            <span className={style.blog_poem}>{poem}</span>
        </div>
    )


}


export default Poem