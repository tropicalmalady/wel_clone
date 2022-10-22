interface HamburgerProps
{
 toggle:boolean,
 handleToggle():void
}

const style={
    line:`
    w-[22px] h-[2px] bg-primaryColors-purple700 block mt-[4px] transition-all ease-in-out relative`,
  }

export default function Hamburger({props}:{props:HamburgerProps})
{
 const {toggle,handleToggle}=props;

  return <div  onClick={handleToggle}>
  <div className="cursor-pointer"> 
    <span className={`${style.line} ${toggle ? "rotate-[45deg] top-[6px]" : ""}`}></span>
    <span className={`${style.line} ${toggle ? "opacity-0": ""}`}></span>
    <span className={`${style.line} ${toggle ? "rotate-[-45deg] top-[-6px]" : ""}`} ></span>
    </div>
    </div>
}


