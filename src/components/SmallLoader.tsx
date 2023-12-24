import { FC } from "react";


interface LoaderProps {
    show: boolean
}

const SmallLoader: FC<LoaderProps> = ({show}) => {
    return(
        <span className="loader" style={{opacity: show ? 1 : 0}}></span>
    )
}

export default SmallLoader;