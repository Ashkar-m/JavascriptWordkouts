
import React from 'react'

export default function ListOfValues(props) {
  return (
    <div>

        {
            props.names.map((obj,ind)=>{
                return(
                    <div>
                        <ul>
                            <li key={ind}>{obj}</li>
                        </ul>

                    </div>
                )
            })
        }
      
    </div>
  )
}
