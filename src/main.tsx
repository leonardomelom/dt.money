import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/styles'
import { createServer, Model } from 'miragejs'
 

createServer({

  models:{
    transaction: Model
  },

  seeds(server){server.db.loadData({
    transactions:[
      {
        id: 1,
        title: 'Freela website',
        type: 'deposit',
        categorie: 'dev',
        amount: 3000,
        createdAt: new Date('2021-02-12 09:00:00')
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        categorie: 'contas',
        amount: 1000,
        createdAt: new Date('2021-02-14 12:00:00')
      },
    ]
  })},
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
     return this.schema.all('transaction')
    }
    )

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
)
