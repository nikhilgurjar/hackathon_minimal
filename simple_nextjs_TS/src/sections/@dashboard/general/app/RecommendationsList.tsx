import { List, ListItem, Typography } from "@mui/material"

export default function RecommendationsList({data}:any) {
    return(
        <List sx={{ listStyleType: 'disc', pl: 4}}>
        {
            data.map((item:any)=>{
                return(
                    <ListItem sx={{ display: 'list-item' }}>
            <Typography variant="body2">
                {item}
            </Typography>
        </ListItem>
                )
            })
        }
        </List>
    )
}