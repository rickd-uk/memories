import React, { useEffect, useState } from 'react'

import { Container, Grow, Grid, Paper } from '@material-ui/core'

import Posts from '../Posts'
import Form from '../Form'
import Pagination from '../Pagination'

import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
