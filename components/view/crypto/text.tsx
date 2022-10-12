const style = {
    container: `
    desktop:pr-[6.6vw]
    laptop:pr-[80px]
    tab:w-[50%]
    minitab:w-[60%] minitab:max-w-[100%] minitab:ml-auto minitab:mr-0  minitab:pr-[50px]
    max-w-[410px] m-auto mb-[2em]`,

    title: `
    desktop:text-[3vw]
    laptop:text-[40px]
    minitab:text-[35px]
    text-[25px] font-Museo font-[500]`,

    description: `
    desktop:text-[1.67vw]
    laptop:text-[20px] 
    minitab:text-[18px]
    text-[16px] font-[300] text-left`,
}


export default function CryptoText() {
    return <div className="mb-[2em]">
        <div className={style.container}>
            <div className="mb-[1em] desktop:mb-[1.5vw]">
                <h2 className={style.title}>
                    Crypto, decoded
                </h2>
            </div>
            <p className={style.description}>
                With so many cryptocurrencies to choose from, Weltio helps you make sense of it all to build your own crypto portfolio
            </p>
        </div>
    </div>
}