import { type FC } from "react"
import styles from "./portfolio.scss?inline"

// Nomes das props precisam ser minúsculas
export interface IPortfolioProps {
    name: string;
    githuburl: string;
}

export const Portfolio: FC<IPortfolioProps> = ({
    name,
    githuburl,
}: IPortfolioProps) => {

    return (
        <div>
            <style>{styles}</style>
            <div className="portfolio">
                <div>
                    <h1 className="portfolio__title">Portfólio de {name}</h1>
                </div>
                <div>
                    <a className="portfolio__link" href={githuburl} target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}