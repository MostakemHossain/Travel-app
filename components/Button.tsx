import Image from "@/node_modules/next/image";

type ButtonProps={
    type:'button'| 'submit';
    title:string;
    icon?:string;
    variant:"btn_dark_green";
}

const Button = ({
    type,
    title,
    icon,
    variant,
}:ButtonProps) => {
  return (
   <button
   className={`flexCenter gap-3 border rounded-full ${variant}`}
   type={type}
   >
    {
        icon && <Image src={icon} alt={title} width={24} height={24} ></Image>
        
    }
    <label className="bold-16 whitespace-nowarp">{title}</label>

   </button>
  )
}

export default Button