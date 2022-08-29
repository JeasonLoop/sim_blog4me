import { GithubOutlined, AliwangwangOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import style from './style.module.less'


type Props = {}
const { Meta } = Card;

// TODO: Jeffries的个人信息卡
const AuthorInfo = (props: Props) => {
    return (
        <div className={style.author_info}>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <GithubOutlined key='github' />,
                    <MailOutlined key='mail' />,
                    <AliwangwangOutlined key='about' />,

                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Jeffries"
                    description="Continuous efforts live up to the enthusiasm"
                />
            </Card>

        </div>
    )
}

export default AuthorInfo