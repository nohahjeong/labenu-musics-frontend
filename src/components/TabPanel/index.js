import { Box, Typography } from '@material-ui/core'

const TabPanel = (props) => {
    const { children, value, index } = props

    return (
        <div>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default TabPanel