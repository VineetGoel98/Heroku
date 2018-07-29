const express = require('express')
const app=express()
const PORT = process.env.port||3333
const todos = ["one task", "two task"]
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/', (req, res) => res.send(`
<form method="post" action="/addtodo">
  <input name="newtodo">
  <input type="submit">
</form>
<ul>
  <li>
  ${todos.join('</li><li>')}
  </li>
</ul>
`))

// app.get('/vineet',
//     (req,res)=>{
//         res.send(`<ul>
//         <li>
//         ${todos.join('</li><li>')}   
//         </li>
//       </ul>`)
//     }
//)

app.get('/addtodo', (req, res) => {
  todos.push(req.query['newtodo'])
  res.redirect('/')
//   res.redirect('/vineet')
})

app.post(
  '/addtodo',
  (req,res)=>{
    todos.push(req.body['newtodo'])
    res.redirect('/')
  }
)


app.listen(PORT, () => console.log(`
Server started on http://localhost:${PORT}
`))