const style = {
    title: `
    desktop:text-[2.5vw]
    minitab:text-[30px]
    text-[25px] font-Museo font-[400] leading-[120%] tracking-[-0.03em]`,

    content: `
    desktop:text-[1.375vw]
    laptop:text-[18px]
    minitab:text-[16px] 
    text-[14px] font-[300] leading-[20px] mx-[auto] leading-[150%]`,
}

export function TextContent() {
    return <div className="tab:mr-[1em]">
      <div className={style.title}>
        <h2 className="minitab:mb-[0.7em] mb-[0.5em]">Any questions?</h2>
      </div>
      <div className={style.content}>
        <div className="minitab:mb-[2em] mb-[1em]">
          <p >Answers are just an email away. Drop us a line and the right person will get back to you as soon as possible</p>
        </div>
      </div>
    </div>
  }