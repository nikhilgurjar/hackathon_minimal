import { List, ListItem, Typography } from "@mui/material"

interface TextListProps{
    data:{
        name: string,
        reason: string
    }[]
}

export default function TextList({data}: TextListProps) {

    return(
        <List sx={{ listStyleType: 'disc', pl: 4}}>
        {
            data.map(item=>{
                return(
                    <ListItem sx={{ display: 'list-item' }}>
            <Typography variant="subtitle2">
                {item.name}
            </Typography>
            <Typography variant="body2">
                {item.reason}
            </Typography>
        </ListItem>
                )
            })
        }
        </List>
    )
}