import { type FC } from "react"
import styles from "./portfolio.scss?inline"

export interface IPortfolioProps {
    name: string;
    githubUrl: string;
}

export const Portfolio: FC<IPortfolioProps> = ({
    name,
    githubUrl,
}: IPortfolioProps) => {

    return (
        <div>
            <style>{styles}</style>
            <div className="portfolio">
                <div>
                    <h1 className="portfolio__title">Portfólio de {name}</h1>
                </div>
                <div>
                    <a className="portfolio__link" href={githubUrl} target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}