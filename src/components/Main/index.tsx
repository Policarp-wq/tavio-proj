import { MenuElement } from "../../models/Types/types"
import { AsideMenu } from "../AsideMenu"

import * as style from "../../styles/main/main.module.scss"
import { Categories, Category } from "../../models/Category"
import { OffersPreviewList } from "../OfferPreview"
import { mockOffers } from "../../models/constants"

export const Main = () =>{
    const elements: MenuElement[] = Categories.map(c => ({
        body: c,
        text: c
    }));
    return(
        <main className={style.main}>
            <AsideMenu items={elements}></AsideMenu>
            <div>
                <h2 className={style.main__title}>Может заинтересовать</h2>
                <OffersPreviewList offers={mockOffers}/>
            </div>
            <div>jsdjf;fsdj;sfdklj</div>
        </main>
    )
}