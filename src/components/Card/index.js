

import {CardContainer} from './style'

export const Card = ({position, company}) => {
    return (
            
                <CardContainer>
                <h2>{position}</h2>
                <h2>{company}</h2>
                </CardContainer>      
        
    )
}