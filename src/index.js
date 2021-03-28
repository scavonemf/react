import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider} from 'react-apollo'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
})

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
