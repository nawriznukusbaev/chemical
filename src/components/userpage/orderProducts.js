import {Box} from "@mui/material";
import {style} from "../../components/modal_style";



export const OrderProducts = ({data,itemId}) => {
    const orders=data.filter(order=>order.id===itemId);
    return (
        <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
        >
            <div className="flex flex-col">
                {orders.map((item,index)=>{
                    return <div>{item}</div>
                })}
            </div>

        </Box>
    )
}