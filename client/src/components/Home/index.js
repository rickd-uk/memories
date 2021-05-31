import React, { useEffect, useState } from 'react'

import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from '@material-ui/core'

import { useHistory, useLocation } from 'react-router-dom'

import ChipInput from 'material-ui-chip-input'

import Posts from '../Posts'
import Form from '../Form'
import Pagination from '../Pagination'

import { useDispatch } from 'react-redux'
import { getPosts, getPostsBySearch } from '../../actions/posts'

import useStyles from './styles'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const query = useQuery()
  const history = useHistory()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')

  const [searchTerm, setSearchTerm] = useState('')
  const [tags, setTags] = useState([])

  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  const handleKeyPress = (e) => {
    // 13 - return key
    if (e.keyCode === 13) {
      searchPost()
    }
  }

  const handleAdd = (tag) => {
    setTags([...tags, tag])
  }

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete))
  }

  const searchPost = () => {
    if (searchTerm.trim() || tags) {
      dispatch(
        getPostsBySearch({
          searchTerm,
          tags: tags.join(','),
        }),
      )
      history.push(
        `/posts/search?searchQuery=${searchTerm || 'none'}&tags=${tags.join(
          ',',
        )}`,
      )
    } else {
      history.push('/')
    }
  }

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
          className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position='static'
              color='inherit'>
              <TextField
                onKeyPress={handleKeyPress}
                name='search'
                variant='outlined'
                label='Search Memories'
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label='Search Tags'
                variant='outlined'
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color='primary'
                variant='contained'>
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />

            <Paper className={classes.pagination} elevation={6}>
              <Pagination page={page} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
