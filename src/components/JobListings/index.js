import React from 'react'

import {Card} from '../Card'

import {List} from './style'

import data from '../../data.json'

export const JobListings = () => {

    return (
        <>
        <List>
             { data.map(({position, company, id}) => {
           
            return (
                <li key={id}>
                    <Card position={position} company={company} />
                </li>

            )
        })}
        </List>
        </>
        
    )
}