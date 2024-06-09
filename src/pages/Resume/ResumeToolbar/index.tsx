import ScrollBox from '@/components/ScrollBox'
import RESUME_TOOLBAR_LIST from '@/constants/resume.ts';
import './index.scss'
const ResumeToolbar = () => {
    const height = document.body.clientHeight;
    return (
        <div className="slider">
            <ScrollBox maxHeight={height - 180}>
                <div className="module">
                    全部模块
                    <div className="content">
                        {RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
                            return (
                                <div className="box" key={toolbar.key}>
                                    <div className="info">
                                        <i className="icon" />
                                        <div className="text">
                                            <div className="name">{toolbar.name}</div>
                                            <div className="summary">{toolbar.summary}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ScrollBox>
        </div>
    );
}
export default ResumeToolbar;