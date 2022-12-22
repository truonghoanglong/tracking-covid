import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Highlight = () => {
  return (
    <>
        <Grid container spacing={3}>

            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">Số Ca Mắc</Typography>
                        <Typography component="span" variant="body2">3000</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">Số Ca Khỏi</Typography>
                        <Typography component="span" variant="body2">3000</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">Số Ca Tử Vong</Typography>
                        <Typography component="span" variant="body2">3000</Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    </>
  )
}

export default Highlight