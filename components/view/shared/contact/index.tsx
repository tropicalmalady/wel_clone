import Gif from './gif';
import { InfoOne, InfoTwo } from './info';
import { TextContent } from './text';

const style = {
    wrapper: `
    desktop:max-w-[100%]  desktop:px-[12vw] 
    laptop:px-[100px] laptop:max-w-[1400px] 
    minitab:px-[80px]
    mx-[auto] mb-[5rem] minitab:pt-[10rem] pt-[8rem]`,

    container: `
    laptop:rounded-[42%/105%] 
    tab:rounded-[47%/105%] 
    flex items-center px-[10%] py-[12%] relative rounded-t-[45%] bg-primaryColors-purple200 hey`,

    gifWrapper: `
    desktop:right-[0%]
    tab:absolute tab:bottom-0 tab:top-[-14%] tab:right-[3%] tab:mt-0
    minitab:w-[30vw] minitab:mt-[-50%]
    mobile:w-[45vw] 
    minimobile:w-[50vw] mt-[-45%] `
}

export default function ContactSection() {
    return <section id="contact">
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className="tab:flex-row tab:items-stretch flex-col-reverse flex items-center">
                    <div className="tab:flex-1">
                        <div className='tab:mt-[0] mt-[2em]'>
                            <TextContent />
                        </div>
                        <div>
                            <div className="mr-[5%] inline-block"> <InfoOne /></div>
                            <div className="inline-block"><InfoTwo /></div>
                        </div>
                    </div>
                    <div className="tab:w-[30%]">
                        <div className={style.gifWrapper}>
                            <Gif />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


